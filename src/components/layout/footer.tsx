import { CodeXml, Mail } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 bg-background border-t flex flex-col gap-16 pt-12">
      {/* upper footer */}
      <section className="flex md:flex-row flex-col md:items-center md:justify-between gap-8">
        {/* logo */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CodeXml className="text-accent-icon" strokeWidth={2.8} size={28} />{" "}
            <span className="font-semibold text-lg text-primary">
              Ritesh Lama
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Crafting digital experiences with precision.
          </p>
        </div>

        {/* shortcut links */}
       <div className="space-y-4">
         <p className="flex md:hidden font-semibold text-foreground/80">Shortcut Links</p>
        <ul className="flex md:flex-row flex-col md:items-center md:justify-between md:gap-8 gap-4 font-semibold text-muted-foreground md:text-base text-sm">
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
       </div>

        {/* connection links */}
        <div className="flex space-x-8">
          <LuGithub size={16} className="text-muted-foreground" />
          <LuLinkedin size={16} className="text-muted-foreground" />
          <Mail size={16} className="text-muted-foreground" />
        </div>
      </section>

      {/* lower footer */}
      <section className="flex md:flex-row flex-col items-center justify-between text-xs text-muted-foreground gap-4">
        <p>© 2026 Ritesh Lama. All rights reserved.</p>
        <p>Built with React & Tailwind</p>
      </section>
    </footer>
  );
}
