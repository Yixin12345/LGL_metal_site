import type { SVGProps } from "react";

import { cn } from "@/lib/cn";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

function IconBase({
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5 shrink-0", className)}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}

export function CubeStackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 11 8 4.5 8-4.5" />
      <path d="m4 14.5 8 4.5 8-4.5" />
    </IconBase>
  );
}

export function FactoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 21V9h5v4l4-3v3l4-3v11H3Z" />
      <path d="M16 21V5h5v16" />
      <path d="M7 21v-4" />
      <path d="M11 21v-4" />
    </IconBase>
  );
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v6c0 4.5 2.8 7.8 7 9 4.2-1.2 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.5 4 5.5 4 9s-1.3 6.5-4 9c-2.7-2.5-4-5.5-4-9s1.3-6.5 4-9Z" />
    </IconBase>
  );
}

export function HammerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m14 4 6 6" />
      <path d="m16.5 2.5 5 5L19 10l-5-5 2.5-2.5Z" />
      <path d="M13 7 4 16" />
      <path d="m6 20-2-2 6-6 2 2-6 6Z" />
    </IconBase>
  );
}

export function CogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.75v2.1" />
      <path d="M12 19.15v2.1" />
      <path d="m4.93 4.93 1.48 1.48" />
      <path d="m17.59 17.59 1.48 1.48" />
      <path d="M2.75 12h2.1" />
      <path d="M19.15 12h2.1" />
      <path d="m4.93 19.07 1.48-1.48" />
      <path d="m17.59 6.41 1.48-1.48" />
    </IconBase>
  );
}

export function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 7h10v8H3V7Z" />
      <path d="M13 9h4l3 3v3h-7V9Z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </IconBase>
  );
}

export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M4 12h16" />
    </IconBase>
  );
}

export function ClipboardListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M9 4h6l1 2h2v14H6V6h2l1-2Z" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <path d="M9 18h3" />
    </IconBase>
  );
}

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M19 5c-8 0-13 4.5-13 10 0 2.5 1.5 4 4 4 5.5 0 10-5 10-13Z" />
      <path d="M8 16c2-2 4.5-4 8-5.5" />
    </IconBase>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4 10-10" />
    </IconBase>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16v12H4V6Z" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7.5 4h3l1 4-2 2c1.5 2.5 3.5 4.5 6 6l2-2 4 1v3c0 1.1-.9 2-2 2C10.4 20 4 13.6 4 5.5 4 4.4 4.9 3.5 6 3.5h1.5Z" />
    </IconBase>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}
