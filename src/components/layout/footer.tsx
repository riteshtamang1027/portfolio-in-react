import { CodeXml, Mail } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="px-36 bg-background border-t flex flex-col gap-16 pt-12">
      {/* upper footer */}
      <section className="flex items-center justify-between">
        {/* logo */}
        <div>
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
        <ul className="flex space-x-8 font-semibold text-muted-foreground text-base">
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        {/* connection links */}
        <div className="flex space-x-8">
          <LuGithub size={16} className="text-muted-foreground" />
          <LuLinkedin size={16} className="text-muted-foreground" />
          <Mail size={16} className="text-muted-foreground" />
        </div>
      </section>

      {/* lower footer */}
      <section className="flex items-center justify-between text-xs text-muted-foreground">
        <p>© 2026 John Doe. All rights reserved.</p>
        <p>Built with React & Tailwind</p>
      </section>
    </footer>
  );
}
