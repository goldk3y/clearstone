import Link from "next/link";
import { siteConfig } from "@/content/home";

const footerLinks = {
  services: [
    { href: "#blueprint", label: "The Blueprint" },
    { href: "#pricing", label: "Pricing" },
    { href: "#process", label: "14-Day Process" },
  ],
  resources: [
    { href: "#faq", label: "FAQ" },
    { href: "#pilot-autopsy", label: "Pilot Autopsy" },
    { href: "#book", label: "Book a Call" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide section-py-sm">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tight font-[family-name:var(--font-logo)]">
                ClearStone
              </span>
            </Link>
            <p className="mt-4 text-body-sm max-w-xs">
              A 14-day, fixed-fee diagnostic that names the three AI investments most likely to pay back in your business.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-label mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-label mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-label mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-caption">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-caption">
            &copy; {currentYear} ClearStone. All rights reserved.
          </p>
          <p className="text-caption">
            Three bets. Fourteen days. Fixed fee.
          </p>
        </div>
      </div>
    </footer>
  );
}
