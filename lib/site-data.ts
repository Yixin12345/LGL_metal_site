import type { IconComponent } from "@/components/icons";
import {
  BriefcaseIcon,
  ClipboardListIcon,
  CogIcon,
  CubeStackIcon,
  FactoryIcon,
  GlobeIcon,
  HammerIcon,
  LeafIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@/components/icons";

type NavItem = {
  label: string;
  href: string;
};

type IconCard = {
  title: string;
  description: string;
  icon: IconComponent;
};

type GalleryItem = {
  title: string;
  caption: string;
  alt: string;
  image: string;
};

export const siteConfig = {
  name: "LL Metal Tech",
  legalName: "LL Metal Material Technology Co. Ltd.",
  url: "https://www.llmetaltech.com",
  email: "info@llmetaltech.com",
  phone: "+1 (438) 926-1018",
  location: "Montreal, Quebec, Canada",
  description:
    "LL Metal Tech is a Montreal-based supplier of hafnium, minor metals, and specialized industrial materials for plasma cutting, recycling, trading, and manufacturing applications.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Materials", href: "/#projects" },
  { label: "Quality", href: "/#sustainability" },
  { label: "Contact", href: "/#contact" },
];

export const trustItems = [
  { title: "Specialized Hafnium Supply", icon: CubeStackIcon },
  { title: "Minor Metals & Alloys", icon: FactoryIcon },
  { title: "Montreal-Based Coordination", icon: ShieldCheckIcon },
  { title: "Worldwide Delivery Support", icon: GlobeIcon },
];

export const heroHighlights = [
  "Focused support for hafnium used in air and oxygen plasma cutting electrodes",
  "Sourcing for pure minor metals, specialty alloys, and selected high-value metal streams",
  "Commercial coordination backed by qualified producer and processor relationships",
];

export const aboutPoints = [
  "Niche market focus on hafnium",
  "Pure minor metal sourcing",
  "International supply coordination",
  "Responsive commercial follow-up",
];

export const services: IconCard[] = [
  {
    title: "Hafnium Supply",
    description:
      "Specialized supply support for hafnium used in electrode applications, including plasma cutting consumables and related industrial uses.",
    icon: CubeStackIcon,
  },
  {
    title: "Minor Metals & Alloys",
    description:
      "Sourcing support for niobium, indium, molybdenum, rhenium, zirconium, tungsten, and other specified minor metal requirements.",
    icon: HammerIcon,
  },
  {
    title: "High-Value Metal Scrap",
    description:
      "Commercial coordination for selected high-value metal scraps and recyclable alloy units where recoverability and specification matter.",
    icon: FactoryIcon,
  },
  {
    title: "Specification & Quality Coordination",
    description:
      "Support around purity expectations, application fit, documentation, and producer alignment before shipment.",
    icon: CogIcon,
  },
  {
    title: "Global Procurement & Logistics",
    description:
      "Montreal-based coordination across suppliers, processors, packaging, and international delivery planning.",
    icon: TruckIcon,
  },
  {
    title: "Project & Repeat Order Support",
    description:
      "Flexible handling for sample lots, recurring purchase programs, and custom sourcing requests.",
    icon: BriefcaseIcon,
  },
];

export const capabilities = [
  {
    title: "Pure Hafnium Sourcing",
    description:
      "Support for hafnium supply where application performance, consistency, and commercial responsiveness are critical.",
  },
  {
    title: "Minor Metals Market Coverage",
    description:
      "Commercial access to selected minor metals and specialized materials that are often harder to source through standard channels.",
  },
  {
    title: "Producer & Processor Network",
    description:
      "Coordination with qualified producer and processor relationships to support practical sourcing routes and supply continuity.",
  },
  {
    title: "Documentation & Spec Alignment",
    description:
      "Attention to buyer requirements around grade, purity, application fit, and shipment-related commercial documentation.",
  },
  {
    title: "Packaging & Export Coordination",
    description:
      "Material preparation and delivery planning designed to support safe handling and efficient movement across borders.",
  },
  {
    title: "Responsive Commercial Support",
    description:
      "Direct follow-up that helps buyers move from inquiry to quote, shipment planning, and repeat ordering with less friction.",
  },
];

export const industries: IconCard[] = [
  {
    title: "Plasma Cutting Consumables",
    description:
      "Material support for electrode applications where hafnium performance and consistency matter.",
    icon: FactoryIcon,
  },
  {
    title: "Specialty Alloy Production",
    description:
      "Minor metals and alloy inputs for demanding metallurgical and manufacturing needs.",
    icon: HammerIcon,
  },
  {
    title: "Metal Recycling & Recovery",
    description:
      "Selective supply and trading support for high-value recyclable metal streams.",
    icon: BriefcaseIcon,
  },
  {
    title: "Industrial Distribution",
    description:
      "Reliable sourcing support for traders and distributors serving technical end users.",
    icon: GlobeIcon,
  },
  {
    title: "Advanced Manufacturing",
    description:
      "Minor metals for engineered products, process equipment, and specialized fabrication programs.",
    icon: CogIcon,
  },
  {
    title: "Energy & Utilities",
    description:
      "Materials aligned with performance-driven industrial systems and long-cycle supply requirements.",
    icon: ShieldCheckIcon,
  },
];

export const qualityPillars: IconCard[] = [
  {
    title: "Purity & Traceability",
    description:
      "Attention to material integrity, commercial clarity, and specification-driven supply discussions.",
    icon: ClipboardListIcon,
  },
  {
    title: "Practical Risk Control",
    description:
      "Measured coordination across sourcing, handling, and delivery to reduce avoidable disruptions.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Long-Term Producer Relationships",
    description:
      "Responsible partnerships that help support continuity, responsiveness, and trust.",
    icon: LeafIcon,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Pure Hafnium Supply",
    caption: "Material sourcing for electrode and plasma cutting applications.",
    alt: "Industrial warehouse shelves stocked with material inventory.",
    image: "https://unsplash.com/photos/-aCrA9FmT8Y/download?force=true&w=1200&q=80",
  },
  {
    title: "Minor Metal Inventory",
    caption: "Specialty metal availability managed for technical orders and commercial follow-up.",
    alt: "Welder working on fabricated metal components in a factory.",
    image: "https://unsplash.com/photos/6Ips_2SI-qE/download?force=true&w=1200&q=80",
  },
  {
    title: "Industrial Handling",
    caption: "Controlled storage and movement for sensitive or high-value material.",
    alt: "Warehouse aisle with pallets and supply inventory.",
    image: "https://unsplash.com/photos/28b8xlTT5t4/download?force=true&w=1200&q=80",
  },
  {
    title: "Supplier Network",
    caption: "Cross-border coordination supporting industrial buyers and niche metal requirements.",
    alt: "Construction and heavy machinery site representing mining support.",
    image: "https://unsplash.com/photos/7jY0NKqO_eE/download?force=true&w=1200&q=80",
  },
  {
    title: "Packing & Dispatch",
    caption: "Prepared shipments aligned with export, warehouse, and delivery planning.",
    alt: "Forklift and delivery vehicle at an industrial supply yard.",
    image: "https://unsplash.com/photos/W_5mHEY4asI/download?force=true&w=1200&q=80",
  },
  {
    title: "Inspection & Readiness",
    caption: "Quality-minded handling before material moves to customers or processors.",
    alt: "Industrial machinery and metal processing environment.",
    image: "https://unsplash.com/photos/mMgC9U15XR0/download?force=true&w=1200&q=80",
  },
];

export const serviceOptions = [
  "Hafnium Supply",
  "Minor Metals & Alloys",
  "High-Value Metal Scrap",
  "Specification & Quality Coordination",
  "Global Procurement & Logistics",
  "Project & Repeat Order Support",
];

export const homeImages = {
  hero: "https://unsplash.com/photos/7jY0NKqO_eE/download?force=true&w=1800&q=80",
  about: "https://unsplash.com/photos/18CHs5JonWQ/download?force=true&w=1200&q=80",
  cta: "https://unsplash.com/photos/6Ips_2SI-qE/download?force=true&w=1600&q=80",
};
