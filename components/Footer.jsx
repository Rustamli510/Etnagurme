import Link from "next/link";

const socials = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <span aria-hidden="true" className="text-lg">
        ◉
      </span>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <span aria-hidden="true" className="text-lg">
        f
      </span>
    ),
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <span aria-hidden="true" className="text-lg">
        t
      </span>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1f2a3a] py-8 text-neutral-300"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-white uppercase">
            ETNA
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            Özenle kurutulmuş, dengeli baharatlı kuru et lezzetleri.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-xs text-neutral-200 transition-colors hover:border-amber-300 hover:text-amber-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-[11px] text-neutral-500">
        © {new Date().getFullYear()} ETNA. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

