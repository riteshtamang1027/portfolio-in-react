import { CodeXml, Menu, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";

export default function Navbar() {
  const header_offser = 72;

  function scrollId({ id }: any) {
    const { el }: any = document.getElementById(id);
    if (!el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - header_offser;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 12);
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  return (
    <header className="flex flex-1 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 py-4 bg-backgroun/70 backdrop-blur-lg min-w-full border-b border-border justify-between">
      {/* logo */}
      <div className="flex items-center space-x-2">
        <CodeXml className="text-accent-icon md:w-8 md:h-8" strokeWidth={2.6}  />{" "}
        <span className="font-semibold text-base md:text-xl text-foreground">RL</span>
      </div>

      {/* links */}
      <nav className="md:flex hidden items-center space-x-8">
        {navLinks.map((link) =>
          link.type === scroll ? (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollId(link.id);
              }}
              className="text-sm font-semibold text-muted-foreground"
            >
              {link.label}
            </a>
          ) : (
            <a key={link.label} href={link.id} className="text-sm font-medium text-muted-foreground">
              {link.label}
            </a>
          ),
        )}
      </nav>

      {/* right side nav */}

      <div className="md:flex hidden items-center space-x-8">
        <Sun strokeWidth={1.5} size={16} className="text-muted-foreground" />
        <LuGithub size={16} className="text-muted-foreground"/>
        <LuLinkedin size={16} className="text-muted-foreground"/>
      </div>

      <Menu className=" flex md:hidden w-5 h-5 text-muted-foreground"/>

    </header>
  );
}

const navLinks = [
  {
    label: "About",
    id: "about",
    type: scroll,
  },
  {
    label: "Projects",
    id: "projects",
    type: scroll,
  },
  {
    label: "Skills",
    id: "skills",
    type: scroll,
  },
  {
    label: "Experiences",
    id: "experiences",
    type: scroll,
  },
  {
    label: "Blog",
    id: "blog",
    type: scroll,
  },
  {
    label: "Contact",
    id: "contact",
    type: scroll,
  },
];
