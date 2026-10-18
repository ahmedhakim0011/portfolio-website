import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const tone = {
  rust: "bg-rust text-cream",
  mustard: "bg-mustard text-ink",
  cream: "bg-cream text-ink",
  teal: "bg-teal text-cream",
} as const;

type Common = { children: ReactNode; tone?: keyof typeof tone; className?: string };
type AsLink = Common & { href: string } & Omit<ComponentProps<"a">, "href" | "children" | "className">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "children" | "className">;

/** Clean, flat button with a soft shadow and a subtle lift on hover. */
export function Button(props: AsLink | AsButton) {
  const { children, tone: t = "rust", className = "" } = props;
  const cls = `group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-sans text-base font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm ${tone[t]} ${className}`;
  const arrow = (
    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  );

  if (props.href !== undefined) {
    const { href, tone: _t, className: _c, children: _ch, ...rest } = props as AsLink;
    const external = href.startsWith("mailto:") || href.startsWith("http");
    return external ? (
      <a href={href} className={cls} {...rest}>
        {children}
        {arrow}
      </a>
    ) : (
      <Link href={href} className={cls} {...rest}>
        {children}
        {arrow}
      </Link>
    );
  }

  const { tone: _t, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button className={cls} {...rest}>
      {children}
      {arrow}
    </button>
  );
}
