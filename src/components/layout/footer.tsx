import { CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-36">
      {/* upper footer */}
      <section>
        {/* logo */}
        <div>
          <div className="flex items-center gap-2">
            <CodeXml className="text-accent-icon" strokeWidth={2.8} size={28} />{" "}
            <span className="font-semibold text-lg text-primary">
              Ritesh Lama
            </span>
          </div>
          <p className="text-slate-400 text-xs">
            Crafting digital experiences with precision.
          </p>
        </div>
        <div></div>
        <div></div>
      </section>

      {/* lower footer */}
      <div></div>
    </footer>
  );
}
