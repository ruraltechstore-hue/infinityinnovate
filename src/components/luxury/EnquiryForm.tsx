import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle, AlertCircle, Send, User, Phone, Mail, MessageSquare } from "lucide-react";
import { submitRegistration, isSupabaseConfigured } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  requirements: z.string().trim().min(5, "Tell us a bit about your requirements").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = { name: "", phone: "", email: "", requirements: "" };

export const EnquiryForm = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof FormState] = i.message; });
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    const res = await submitRegistration(parsed.data);
    setSubmitting(false);
    if (res.ok) {
      setDone(true);
      setForm(initial);
      toast({ title: "Enquiry received", description: "Our team will reach out to you shortly." });
    } else {
      toast({ title: "Could not submit", description: res.error, variant: "destructive" });
    }
  };

  const fields: { key: keyof FormState; label: string; placeholder: string; type?: string; icon: typeof User }[] = [
    { key: "name", label: "Full Name", placeholder: "Your full name", icon: User },
    { key: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel", icon: Phone },
    { key: "email", label: "Email ID", placeholder: "you@example.com", type: "email", icon: Mail },
  ];

  const dark = variant === "dark";

  const inputCls = dark
    ? "w-full bg-[#1E293B] border border-[#334155] text-[#E2E8F0] placeholder:text-[#94A3B8] rounded-xl px-4 py-3.5 pl-11 text-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_12px_hsl(var(--primary)/0.25)]"
    : "w-full bg-card border border-border text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3.5 pl-11 text-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_12px_hsl(var(--primary)/0.18)]";

  const labelCls = dark
    ? "text-xs font-medium text-[#CBD5E1] mb-2 block tracking-wide uppercase"
    : "text-xs font-medium text-muted-foreground mb-2 block tracking-wide uppercase";

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`rounded-2xl p-10 flex flex-col items-center text-center gap-4 ${
          dark ? "bg-[#1E293B]/60 border border-[#334155]/50" : "glass-card"
        }`}
      >
        <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center">
          <CheckCircle size={32} className="text-primary" />
        </div>
        <h3 className={`font-display font-bold text-2xl ${dark ? "text-white" : "text-foreground"}`}>Thank you!</h3>
        <p className={dark ? "text-[#94A3B8] text-sm" : "text-muted-foreground text-sm"}>
          Your enquiry has been received. Our property consultant will contact you shortly.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-2 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-3 text-sm font-medium transition-all hover:brightness-110"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl p-8 md:p-10 space-y-5 ${
        dark
          ? "bg-[#1E293B]/40 backdrop-blur-xl border border-[#334155]/40 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
          : "glass-card"
      }`}
    >
      {!isSupabaseConfigured && (
        <div className={`flex gap-2 items-start text-xs rounded-lg p-3 ${
          dark ? "bg-amber-500/10 text-amber-200 border border-amber-400/20" : "bg-amber-50 text-amber-800 border border-amber-200"
        }`}>
          <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
          <span>Backend not connected yet. Form validation works, but submissions won't be stored until Supabase credentials are added.</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {fields.map((f) => (
          <div key={f.key} className={f.key === "email" ? "sm:col-span-2" : ""}>
            <label className={labelCls}>{f.label}</label>
            <div className="relative">
              <f.icon size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${dark ? "text-[#64748B]" : "text-muted-foreground"}`} />
              <input
                type={f.type || "text"}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
                className={inputCls}
              />
            </div>
            {errors[f.key] && (
              <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
                <AlertCircle size={12} /> {errors[f.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className={labelCls}>Requirements</label>
        <div className="relative">
          <MessageSquare size={16} className={`absolute left-3.5 top-3.5 ${dark ? "text-[#64748B]" : "text-muted-foreground"}`} />
          <textarea
            rows={4}
            placeholder="Tell us about your ideal home, location, budget range..."
            value={form.requirements}
            onChange={(e) => update("requirements", e.target.value)}
            className={`${inputCls} pt-3 resize-none min-h-[120px]`}
          />
        </div>
        {errors.requirements && (
          <p className="text-destructive text-xs mt-1.5 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.requirements}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
      >
        <Send size={16} />
        {submitting ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
};
