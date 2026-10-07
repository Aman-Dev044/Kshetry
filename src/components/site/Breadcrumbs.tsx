import Link from "next/link";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail. The matching JSON-LD is emitted by each page. */
export default function Breadcrumbs({ trail, tone = "dark" }: { trail: Crumb[]; tone?: "dark" | "light" }) {
  const muted = tone === "light" ? "text-gold-light/55" : "text-charcoal-muted";
  const hover = tone === "light" ? "hover:text-gold-light" : "hover:text-burgundy";
  const current = tone === "light" ? "text-gold" : "text-burgundy";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className={`eyebrow text-[0.625rem] ${muted} ${hover} transition-colors duration-400`}>
            Home
          </Link>
        </li>
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              <span aria-hidden className={`${muted} text-[0.625rem]`}>
                /
              </span>
              {last ? (
                <span aria-current="page" className={`eyebrow text-[0.625rem] ${current}`}>
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className={`eyebrow text-[0.625rem] ${muted} ${hover} transition-colors duration-400`}
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
