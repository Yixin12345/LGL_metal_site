import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-data";
import logoMark from "@/LGL_logo-silver.png";

export function BrandMark({
  size = "header",
}: {
  invert?: boolean;
  size?: "header" | "footer";
}) {
  const isFooter = size === "footer";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3 sm:gap-4"
      aria-label="LGL Metal home"
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          isFooter ? "h-[46px] w-[54px]" : "h-[50px] w-[60px] sm:h-[54px] sm:w-[64px]",
        )}
      >
        <Image
          src={logoMark}
          alt=""
          priority={size === "header"}
          sizes="64px"
          className={cn(
            "h-full w-full select-none object-contain",
          )}
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "truncate font-bold leading-none tracking-[0.08em]",
            isFooter
              ? "text-[1rem] text-white sm:text-[1.08rem]"
              : "text-[0.94rem] text-slate-900 sm:text-[1.02rem]",
          )}
        >
          {siteConfig.name.toUpperCase()}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6rem] font-semibold uppercase leading-none tracking-[0.24em]",
            isFooter ? "text-slate-400" : "hidden text-slate-500 xl:block",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
