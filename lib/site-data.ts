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
import hfImage from "@/products_pic/hf.png";
import moImage from "@/products_pic/mo.png";
import nbImage from "@/products_pic/nb.png";
import wImage from "@/products_pic/w.png";
import picture1 from "@/pdf/Picture1.jpg";
import picture2 from "@/pdf/Picture2.png";
import picture3 from "@/pdf/Picture3.png";
import picture4 from "@/pdf/Picture4.png";
import picture5 from "@/pdf/Picture5.jpg";
import picture6 from "@/pdf/Picture6.jpg";
import picture7 from "@/pdf/Picture7.jpg";
import picture8 from "@/pdf/Picture8.jpg";
import picture9 from "@/pdf/Picture9.jpg";

type NavItem = {
  label: string;
  href: string;
};

type ProductMetal = {
  name: string;
  symbol: string;
  kicker: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
};

type ApplicationInsight = {
  name: string;
  eyebrow: string;
  summary: string;
  details: string[];
};

type ProductGalleryItem = {
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
  name: "LL Metal Tech",
  legalName: "LL Metal Material Technology Co. Ltd.",
  tagline: "Specialty metals and industrial materials",
  url: "https://www.llmetaltech.com",
  email: "info@llmetaltech.com",
  phone: "+1 (438) 926-1018",
  location: "Montreal, Quebec, Canada",
  description:
    "LL Metal Tech is a Montreal-based supplier of hafnium, tungsten, molybdenum, niobium, and specialized industrial materials for plasma cutting, alloying, and high-temperature manufacturing applications.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Metals", href: "/#products" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Supply", href: "/#supply" },
  { label: "Quality", href: "/#quality" },
];

export const heroHighlights = [
  "Hafnium support for plasma cutting electrode programs and replacement-cycle buying",
  "Tungsten, molybdenum, and niobium positioned for refractory, alloying, and engineered material needs",
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
    symbol: "Hf",
    kicker: "Plasma cutting performance",
    description:
      "Hafnium remains the lead product for electrode-related demand, especially where buyers care about arc stability, consumable performance, and dependable replenishment for plasma cutting operations.",
    highlights: [
      "Electrode-focused industrial demand",
      "Purity-conscious commercial coordination",
      "Useful for repeat replacement programs",
    ],
    image: hfImage,
  },
  {
    name: "Tungsten",
    symbol: "W",
    kicker: "Bars, refractory demand, alloy feed",
    description:
      "Tungsten is positioned for buyers that need a dense, heat-resistant refractory metal in bar formats, processed-material programs, or alloy-oriented sourcing discussions.",
    highlights: [
      "Round and square bar programs",
      "Powder-metallurgy based material routes",
      "TW-1, TW-2, and TW-4 related discussions",
    ],
    image: wImage,
  },
  {
    name: "Molybdenum",
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
  },
  {
    name: "Niobium",
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

export const productGallery: ProductGalleryItem[] = [
  {
    title: "Hafnium Wire Coil",
    caption: "Real product photo from the LL Metal material file set.",
    image: picture1,
  },
  {
    title: "Hafnium Wire Detail",
    caption: "Close-up product image showing wire form and surface finish.",
    image: picture2,
  },
  {
    title: "Electrode Production",
    caption: "Manufacturing process view supporting electrode-related applications.",
    image: picture3,
  },
  {
    title: "Precision Inspection",
    caption: "Measured component inspection during production workflow.",
    image: picture4,
  },
  {
    title: "Bar Stock",
    caption: "Square or rectangular stock form for refractory-metal supply discussions.",
    image: picture5,
  },
  {
    title: "Curved Stock",
    caption: "Processed material form shown in bundled supply condition.",
    image: picture6,
  },
  {
    title: "Bulk Rods",
    caption: "Packed rod inventory prepared for industrial material handling.",
    image: picture7,
  },
  {
    title: "Rod Ends",
    caption: "Closer view of machined or cut rod inventory in storage.",
    image: picture8,
  },
  {
    title: "Straight Rod Set",
    caption: "Clean straight stock presentation for product image display.",
    image: picture9,
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
  hero: "https://unsplash.com/photos/7jY0NKqO_eE/download?force=true&w=1800&q=80",
  about: "https://unsplash.com/photos/6Ips_2SI-qE/download?force=true&w=1200&q=80",
};
