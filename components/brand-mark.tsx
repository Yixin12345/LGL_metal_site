import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-data";
import logoMark from "@/logo-mark.png";

export function BrandMark({
  size = "header",
}: {
  invert?: boolean;
  size?: "header" | "footer";
}) {
  const isFooter = size === "footer";

  return (
    <Link
      href="/#home"
      className="inline-flex shrink-0 items-center gap-3 sm:gap-4"
      aria-label="LL Metal Tech home"
    >
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          isFooter ? "h-[52px] w-[52px]" : "h-[58px] w-[58px] sm:h-[62px] sm:w-[62px]",
        )}
      >
        <Image
          src={logoMark}
          alt=""
          priority={size === "header"}
          sizes="64px"
          className={cn(
            "h-auto w-auto select-none",
            isFooter ? "max-h-[52px] max-w-[52px]" : "max-h-[58px] max-w-[58px] sm:max-h-[62px] sm:max-w-[62px]",
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
