import type { StaticImageData } from "next/image";

import type { IconComponent } from "@/components/icons";
import {
  ClipboardListIcon,
  CogIcon,
  CubeStackIcon,
  GlobeIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@/components/icons";
import hfImage from "@/P_hafnium/hf.png";
import hfCrystalBars from "@/P_hafnium/Crystal bars Zr0.2.jpg";
import hfCrystalScraps from "@/P_hafnium/Crystal scraps.jpg";
import hfEbmIngot from "@/P_hafnium/EBM ingot —5N、Fe 6ppm、Zr 760ppm.jpg";
import hfWire from "@/P_hafnium/Hafnium wire(Various sizes).png";
import moImage from "@/P_molybdenum/mo.png";
import moBarStock from "@/P_molybdenum/bar-stock.jpg";
import moCurvedStock from "@/P_molybdenum/curved-stock.jpg";
import moStraightRods from "@/P_molybdenum/straight-rods.jpg";
import nbImage from "@/P_niobium/nb.png";
import nbBulkRods from "@/P_niobium/bulk-rods.jpg";
import nbPrecisionInspection from "@/P_niobium/precision-inspection.png";
import nbRodEnds from "@/P_niobium/rod-ends.jpg";
import wImage from "@/P_tungsten/w.png";
import wBars from "@/P_tungsten/Tungsten bars.png";
import wScraps from "@/P_tungsten/Tungsten scraps.png";
import aircraftEngine from "@/aircraft-engine.png";
import rocketBackground from "@/rocket_background.jpg";

type NavItem = {
  label: string;
  href: string;
};

export type ProductMetal = {
  name: string;
  slug: string;
  symbol: string;
  kicker: string;
  description: string | string[];
  highlights: string[];
  image: StaticImageData;
  gallery: ProductGalleryItem[];
  forms: string[];
  generalInfo: {
    label: string;
    value: string;
  }[];
};

type ApplicationInsight = {
  name: string;
  eyebrow: string;
  summary: string;
  details: string[];
};

export type ProductGalleryItem = {
  title: string;
  caption: string;
  image: StaticImageData;
};

type SupportCard = {
  title: string;
  description: string;
  icon: IconComponent;
  points: string[];
};

type WorkflowStep = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "LGL Metal",
  legalName: "LGL Metal",
  tagline: "Specialty metals and industrial materials",
  url: "https://www.lglmetal.com",
  email: "info@llmetaltech.com",
  phone: "+1 (514) 665-6397",
  phoneHref: "tel:+15146656397",
  location: "Montreal, Canada",
  description:
    "LGL Metal is a Montreal-based trader and supplier of minor metals for alloying and high-temperature manufacturing applications.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Metals", href: "/#products" },
  { label: "Supply", href: "/#supply" },
  { label: "Quality", href: "/#quality" },
];

export const heroHighlights = [
  "Hafnium support for high-temperature nickel-base single crystal alloy programs for aero and industrial gas turbine blades",
  "Tungsten, molybdenum, niobium, tantalum, and other minor metals positioned for refractory, alloying, and engineered material needs",
  "Montreal-based coordination designed to simplify specification review, sourcing, and delivery follow-up",
];

export const aboutPoints = [
  "Focused on niche refractory and minor metal demand",
  "Buyer-friendly communication for technical inquiries",
  "Cross-border sourcing and shipment coordination",
  "Attention to quality, form, and application fit",
];

export const productMetals: ProductMetal[] = [
  {
    name: "Hafnium",
    slug: "hafnium",
    symbol: "Hf",
    kicker: "Plasma cutting performance",
    description: [
      "Hafnium is a rare refractory metal primarily used in aerospace superalloys, nuclear control rods, plasma cutting electrodes, and semiconductor manufacturing. It has a melting point of approximately 2,233°C and offers excellent high-temperature strength, oxidation resistance, and corrosion resistance.",
    ],
    highlights: [
      "Electrode-focused industrial demand",
      "Purity-conscious commercial coordination",
      "Useful for repeat replacement programs",
    ],
    image: hfImage,
    gallery: [
      { title: "Hafnium Product Overview", caption: "Primary hafnium product visual for buyer review.", image: hfImage },
      { title: "Crystal bars", caption: "Zr<0.2% Hf>99.5%", image: hfCrystalBars },
      { title: "Crystal bar pieces", caption: "Zr<0.2% Hf>99.5%", image: hfCrystalScraps },
      { title: "EBM ingot", caption: "5N, Fe 6ppm, Zr 760ppm", image: hfEbmIngot },
      { title: "Hafnium wire", caption: "Various sizes", image: hfWire },
    ],
    forms: [
      "Crystal bar",
      "EB melted ingot",
      "Wires",
    ],
    generalInfo: [
      { label: "Chemical Symbol", value: "Hf" },
      { label: "Atomic No.", value: "72" },
      { label: "Atomic Weight", value: "178.49" },
      { label: "Density g/cm3", value: "13.3" },
    ],
  },
  {
    name: "Tungsten",
    slug: "tungsten",
    symbol: "W",
    kicker: "Bars, refractory demand, alloy feed",
    description:
      "Tungsten (W) is a high-density refractory metal with a melting point of 3,422°C. It is widely used in aerospace, defense, electronics, tooling, mining, and high-temperature industrial applications due to its outstanding heat resistance, strength, and durability.",
    highlights: [
      "Round and square bar programs",
      "Powder-metallurgy based material routes",
      "TW-1, TW-2, and TW-4 related discussions",
    ],
    image: wImage,
    gallery: [
      { title: "Tungsten Product Overview", caption: "Primary tungsten product visual for refractory-metal discussions.", image: wImage },
      { title: "Tungsten bars", caption: "", image: wBars },
      { title: "Tungsten scraps", caption: "", image: wScraps },
    ],
    forms: [
      "Tungsten bars",
      "Tungsten scraps",
    ],
    generalInfo: [
      { label: "Chemical Symbol", value: "W" },
      { label: "Atomic No.", value: "74" },
      { label: "Atomic Weight", value: "183.84" },
      { label: "Density g/cm3", value: "19.3" },
    ],
  },
  {
    name: "Molybdenum",
    slug: "molybdenum",
    symbol: "Mo",
    kicker: "High-temperature and electronics use",
    description:
      "Molybdenum supports applications that value high-temperature performance, conductivity, and lower thermal expansion, including furnace, glass, tooling, electronics, and sputtering environments.",
    highlights: [
      "High melting point refractory profile",
      "Heating electrode and sputtering relevance",
      "Useful where easier machining than tungsten matters",
    ],
    image: moImage,
    gallery: [
      { title: "Molybdenum Product Overview", caption: "Primary molybdenum product visual for high-temperature applications.", image: moImage },
      { title: "Curved Stock", caption: "Processed material form shown in bundled supply condition.", image: moCurvedStock },
      { title: "Bar Stock", caption: "Stock form relevant to refractory-metal supply review.", image: moBarStock },
      { title: "Straight Rod Set", caption: "Straight stock presentation for industrial buyer review.", image: moStraightRods },
    ],
    forms: [
      "Bars and stock programs",
      "Heating electrode discussions",
      "Sputtering and electronics-related material review",
      "High-temperature furnace and tooling support",
    ],
    generalInfo: [
      { label: "Chemical Symbol", value: "Mo" },
      { label: "Atomic No.", value: "42" },
      { label: "Atomic Weight", value: "95.94" },
      { label: "Density g/cm3", value: "10.2" },
    ],
  },
  {
    name: "Niobium",
    slug: "niobium",
    symbol: "Nb",
    kicker: "Specialty alloying and performance metallurgy",
    description:
      "Niobium adds value where customers need a metal input that supports higher-performance steels, superalloys, or engineered materials with better strength and temperature capability.",
    highlights: [
      "Alloy additions and specialty inputs",
      "Supports performance-driven metallurgy",
      "Relevant to energy, industrial, and engineered products",
    ],
    image: nbImage,
    gallery: [
      { title: "Niobium Product Overview", caption: "Primary niobium product visual for alloying and engineered material use.", image: nbImage },
      { title: "Bulk Rods", caption: "Packed rod inventory prepared for industrial material handling.", image: nbBulkRods },
      { title: "Rod Ends", caption: "Closer view of cut or machined rod inventory.", image: nbRodEnds },
      { title: "Precision Inspection", caption: "Measured component inspection during production workflow.", image: nbPrecisionInspection },
    ],
    forms: [
      "Alloy-addition material programs",
      "Specialty input sourcing discussions",
      "Engineered-material and performance metallurgy review",
    ],
    generalInfo: [
      { label: "Chemical Symbol", value: "Nb" },
      { label: "Atomic No.", value: "41" },
      { label: "Atomic Weight", value: "92.90638" },
      { label: "Density g/cm3", value: "8.6" },
    ],
  },
];

export const applicationInsights: ApplicationInsight[] = [
  {
    name: "Hafnium for Plasma Cutting",
    eyebrow: "Application-driven demand",
    summary:
      "In plasma cutting torches, the electrode sits at the center of the torch with the nozzle below it. Because electrodes, nozzles, and vortex rings are consumable parts, stable hafnium supply matters to buyers who need consistent cutting performance and want to avoid uncontrolled arcs that can damage the torch.",
    details: [
      "Used in air and oxygen plasma cutting electrode systems",
      "Directly tied to cut quality, arc behavior, and consumable life",
      "A strong fit for repeat maintenance and replacement programs",
    ],
  },
  {
    name: "Tungsten Bar Supply",
    eyebrow: "Form and grade matter",
    summary:
      "Tungsten bars are commonly supplied as square or round bars produced from tungsten powder through blending, pressing, and sintering. The added material note also references TW-1, TW-2, and TW-4 in commercial discussions depending on whether the need is alloy feedstock, processed materials, or alloy additive use.",
    details: [
      "Round and square bar supply formats",
      "Relevant to refractory, tooling, and alloy-related programs",
      "Useful where density, hardness, and heat resistance are priorities",
    ],
  },
  {
    name: "Molybdenum in High-Temperature Systems",
    eyebrow: "Refractory and electronics value",
    summary:
      "Molybdenum combines a very high melting point, strong conductivity, low expansion, and useful strength at elevated temperatures. It is relevant to high-temperature furnaces, glass-industry electrodes, electronics, metalworking tools, aerospace applications, and sputtering targets for solar and display manufacturing.",
    details: [
      "Approx. 2610°C melting point with low thermal expansion",
      "Easier to machine than tungsten in many applications",
      "Used where heat stability and clean processing matter",
    ],
  },
  {
    name: "Niobium for Alloy Performance",
    eyebrow: "Strategic specialty input",
    summary:
      "Niobium is often chosen as a high-value additive metal for specialty steels, superalloys, and engineered components. It helps support strength, weldability, and temperature performance, making it commercially relevant to manufacturers that care about efficiency, durability, and long service life.",
    details: [
      "Common in alloying and metallurgical improvement programs",
      "Relevant to energy, transportation, and advanced manufacturing",
      "A strong fit for buyers needing performance-oriented metal inputs",
    ],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Inquiry Review",
    description:
      "Application, metal, form, quantity, and timing are clarified up front so the sourcing path is more accurate from the start.",
  },
  {
    title: "Specification Check",
    description:
      "Grade expectations, purity targets, and commercial documentation needs are aligned before material movement is confirmed.",
  },
  {
    title: "Source Matching",
    description:
      "Qualified producers or processors are matched to the program based on the material form and the buyer's practical requirements.",
  },
  {
    title: "Shipment Follow-Through",
    description:
      "Packaging, export planning, and delivery updates stay visible so cross-border orders move with less friction.",
  },
];

export const supplyPrograms: SupportCard[] = [
  {
    title: "Material Forms & Programs",
    description:
      "We frame supply discussions around the form the customer actually needs, rather than relying on broad product labels.",
    icon: CubeStackIcon,
    points: [
      "Hafnium aligned with plasma cutting electrode demand",
      "Tungsten programs for round bars, square bars, or alloy-feed conversations",
      "Molybdenum and niobium positioned for higher-temperature or performance-led use cases",
    ],
  },
  {
    title: "Specification Alignment",
    description:
      "Specialty-metal orders move better when application details are handled early and clearly.",
    icon: ClipboardListIcon,
    points: [
      "Application intent, grade, and chemistry discussion before shipment",
      "Commercial visibility on quantity, repeat demand, and timing",
      "Attention to documentation and material-handling expectations",
    ],
  },
  {
    title: "Logistics & Delivery Coordination",
    description:
      "Montreal-based coordination helps bridge producers, processors, and industrial buyers across different markets.",
    icon: TruckIcon,
    points: [
      "Packaging and dispatch planning for specialty-material movement",
      "Cross-border coordination and practical export follow-up",
      "Responsive communication for repeat or project-based buying programs",
    ],
  },
];

export const qualityPillars: SupportCard[] = [
  {
    title: "Application-Aware Sourcing",
    description:
      "Material discussions are tied to the way the metal is actually used, from plasma electrodes to alloy additions and high-temperature manufacturing.",
    icon: CogIcon,
    points: [],
  },
  {
    title: "Commercial Clarity",
    description:
      "Buyers need direct communication on form, grade expectations, documentation, and shipment planning rather than generic catalog language.",
    icon: ShieldCheckIcon,
    points: [],
  },
  {
    title: "Reliable Follow-Through",
    description:
      "Repeatable purchasing depends on practical packing, delivery visibility, and responsive updates once an order is moving.",
    icon: GlobeIcon,
    points: [],
  },
];

export const homeImages = {
  hero: rocketBackground,
  about: aircraftEngine,
};
