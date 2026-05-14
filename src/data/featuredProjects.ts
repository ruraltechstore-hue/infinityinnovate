import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export type FeaturedProjectSpec = {
  label: string;
  value: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  location: string;
  desc: string;
  image: string;
  tagline: string;
  overview: string[];
  highlights: string[];
  specs: FeaturedProjectSpec[];
  amenities: string[];
  reraNote?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "infinity-heights",
    title: "Infinity Heights",
    location: "Hyderabad",
    desc: "Premium 3 & 4 BHK sky-residences with panoramic city views.",
    image: property1,
    tagline: "Sky-residences designed for skyline living and long-term appreciation.",
    overview: [
      "Infinity Heights rises above central Hyderabad with floor-to-ceiling glazing, generous decks and layouts optimised for cross-ventilation. Each residence is planned around family routines — separate utility zones, ample storage and acoustically treated party walls.",
      "The podium blends landscaped gardens, a temperature-controlled pool and indoor recreation so weekday evenings feel like a getaway without leaving home.",
    ],
    highlights: [
      "Exclusive high-floor 3 & 4 BHK configurations with servant quarters options",
      "Club-level amenities including squash, co-working lounges and a sky observatory deck",
      "Triple-height lobby with concierge-style arrival experience",
      "EV-ready parking stacks with dedicated visitor bays",
    ],
    specs: [
      { label: "Configurations", value: "3 BHK & 4 BHK" },
      { label: "Typical carpet area", value: "1,850 – 2,950 sq.ft." },
      { label: "Possession", value: "Phase-wise handovers — enquire for current tower status" },
      { label: "Ceiling height", value: "~11 ft in living zones (subject to final drawings)" },
    ],
    amenities: [
      "Infinity-edge swimming pool & kids' splash pad",
      "Indoor games, banquet hall & landscaped terrace pods",
      "Fully equipped gymnasium & yoga studio",
      "Pet-friendly walking loop within podium greens",
    ],
    reraNote:
      "RERA registration details are representative marketing copy. Verify current registration numbers, sanctioned plans and pricing with our sales team before booking.",
  },
  {
    slug: "skyline-residency",
    title: "Skyline Residency",
    location: "Hyderabad",
    desc: "Contemporary apartments built around lush central courtyards.",
    image: property2,
    tagline: "Low-rise towers framing a quiet central courtyard — rare in urban Hyderabad.",
    overview: [
      "Skyline Residency stitches four slender towers around a raised courtyard filled with native planting and water features. Apartments face inward for calm mornings and outward for city glimpses — every floor plate was iterated for daylight scores.",
      "Families appreciate the on-campus learning nook, cycling loop and shaded walkways that keep children visible yet independent.",
    ],
    highlights: [
      "Courtyard-first masterplan with passive cooling corridors",
      "Dualaspect corners available on select typologies",
      "Dedicated elders' sit-outs and reflexology walk",
      "Rainwater recharge pits sized for entire micro-catchment",
    ],
    specs: [
      { label: "Configurations", value: "2.5, 3 & 3.5 BHK" },
      { label: "Typical carpet area", value: "1,420 – 2,200 sq.ft." },
      { label: "Possession", value: "Tower A delivered — Tower B booking open" },
      { label: "Structure", value: "Earthquake-resistant shear-wall core" },
    ],
    amenities: [
      "Central landscaped courtyard & jogging track",
      "Community library & remote-work booths",
      "Cricket practice nets & multipurpose court",
      "Provisioned convenience retail at stilt level",
    ],
    reraNote:
      "Representative project narrative. Confirm tower-wise approvals and inventory availability with InfinityInnovative sales.",
  },
  {
    slug: "urban-vista",
    title: "Urban Vista",
    location: "Gachibowli",
    desc: "Modern living minutes from the city's tech and business hubs.",
    image: property3,
    tagline: "A commuter-friendly address between ORR, metro corridors and Gachibowli workplaces.",
    overview: [
      "Urban Vista caters to professionals who want shorter commutes without sacrificing weekend calm. Compact-yet-luxurious units maximise usable area while keeping maintenance intelligent — smart metering ready, fibre backbone and visitor management integrated from day one.",
      "Evening lighting along vehicular drops and a landscaped arrival court give the project a hospitality-grade sense of entry.",
    ],
    highlights: [
      "Sky lounge & coworking pods overlooking the Financial District",
      "Shuttle timing coordination desk for major IT parks",
      "Noise-buffered façades along arterial edge",
      "Convertible study alcoves in select 3 BHK layouts",
    ],
    specs: [
      { label: "Configurations", value: "2, 3 & 3 BHK + study" },
      { label: "Typical carpet area", value: "1,180 – 2,050 sq.ft." },
      { label: "Possession", value: "Under construction — milestone-linked payment plan" },
      { label: "Parking", value: "Tandem & compact SUV-friendly bays" },
    ],
    amenities: [
      "Rooftop infinity jacuzzi & barbecue decks",
      "Indoor cycling studio & sprint track",
      "Grocery click-collect lockers",
      "EV charging backbone on selected floors",
    ],
    reraNote:
      "Marketing descriptions may evolve with approvals. Request the latest RERA QR flyers and cost sheets from our office.",
  },
  {
    slug: "emerald-towers",
    title: "Emerald Towers",
    location: "Kondapur",
    desc: "Architectural twin-towers with resort-style amenities.",
    image: property4,
    tagline: "Twin landmark silhouettes connected by a shared amenity bridge.",
    overview: [
      "Emerald Towers makes a sculptural statement along the Kondapur skyline while preserving privacy — no direct overlooking between opposing balconies. The bridge level hosts celebration spaces, freeing the ground plane entirely for gardens.",
      "Interior palettes emphasise warm stone, brushed metal and matte wood tones curated by our design studio partners.",
    ],
    highlights: [
      "Sky bridge with banquet terrace & infinity horizon views",
      "Private lift lobby options on premium stacks",
      "Double-glazed glazing package for acoustic comfort",
      "Temperature-controlled wine lounge & chef's demo kitchen",
    ],
    specs: [
      { label: "Configurations", value: "3, 4 & 5 BHK sky villas" },
      { label: "Typical carpet area", value: "2,100 – 4,200 sq.ft." },
      { label: "Possession", value: "Tower Emerald-1 nearing finishing stage" },
      { label: "Floor plates", value: "Limited-edition corner residences per floor" },
    ],
    amenities: [
      "Resort lagoon pool with separate lap lane",
      "Indoor golf simulator & cigar lounge",
      "Crèche & indoor toddler montessori zone",
      "Guest suites managed by front desk",
    ],
    reraNote:
      "Twin-tower nomenclature for illustration. Validate sanctioned built-up areas against approved drawings.",
  },
  {
    slug: "royal-enclave",
    title: "Royal Enclave",
    location: "Kukatpally",
    desc: "Gated villa community with private gardens and clubhouse.",
    image: property5,
    tagline: "Low-density villas where private gardens meet club hospitality.",
    overview: [
      "Royal Enclave is plotted for buyers who want independent-floor privacy within a secured estate. Each villa receives manicured setbacks, optional plunge pools and structured basement storage.",
      "Tree-lined avenues, underground services and hidden duct banks keep sightlines clean — the estate feels like a landscaped campus, not a congested lane.",
    ],
    highlights: [
      "Gated perimeter with ANPR entry & visitor pre-authorisation",
      "Clubhouse with salon, diagnostic tie-ups & gourmet café lease",
      "Solar-ready rooftops & rainwater harvesting per plot",
      "Dedicated domestic help quarters block optional add-on",
    ],
    specs: [
      { label: "Configurations", value: "4 & 5 BHK villas + optional attic studio" },
      { label: "Plot sizes", value: "Starting ~240 sq.yds. — bespoke amalgamation possible" },
      { label: "Possession", value: "Phase 1 villas ready for fit-out visits" },
      { label: "Club dues", value: "Moderated sinking fund model — schedule on request" },
    ],
    amenities: [
      "Signature clubhouse & Olympic-length lap pool",
      "Organic kitchen garden allotments",
      "Outdoor amphitheatre & weekend farmer markets",
      "On-call facility management desk",
    ],
    reraNote:
      "Villa clusters may be registered under multiple phases. Obtain phase-specific compliance certificates during booking.",
  },
  {
    slug: "horizon-grand",
    title: "Horizon Grand",
    location: "Hitech City",
    desc: "Landmark high-rise designed for modern Indian families.",
    image: property6,
    tagline: "A high-rise anchor minutes from Hitech City workplaces and metro connectivity.",
    overview: [
      "Horizon Grand balances investor-grade liquidity with end-user livability — compact two-bed starter formats sit alongside expansive family homes on upper belts. Sound-rated glazing buffers traffic hum while orientation captures prevailing winds.",
      "Retail at the base keeps daily essentials walkable; upper residences remain serene via dedicated service cores.",
    ],
    highlights: [
      "Sky gym & meditation deck with uninterrupted western horizon",
      "Kid-centric floors with indoor play street",
      "Integrated parcel rooms & cold storage for deliveries",
      "Premium façades maintained via boom-lift access provisions",
    ],
    specs: [
      { label: "Configurations", value: "2, 3 & 4 BHK" },
      { label: "Typical carpet area", value: "1,050 – 2,650 sq.ft." },
      { label: "Possession", value: "Mid-rise wings prioritised for early movers" },
      { label: "Connectivity", value: "Metro & ORR access — maps shared during site visit" },
    ],
    amenities: [
      "Retail high street & pharmacy anchor tenancy",
      "Double-height sports arena & climbing wall",
      "Senior citizen hobby studios",
      "Night-lit jogging loop around podium",
    ],
    reraNote:
      "Location descriptors are indicative distance references. Conduct independent connectivity checks during due diligence.",
  },
];

export function getFeaturedProjectBySlug(slug: string | undefined): FeaturedProject | undefined {
  if (!slug) return undefined;
  return featuredProjects.find((p) => p.slug === slug);
}
