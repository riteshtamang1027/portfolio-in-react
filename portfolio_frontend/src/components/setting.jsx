import { Cog, ShieldUser } from "lucide-react";
import { useState } from "react";
import Theme_toggle from "./theme_toggle";
import { Link } from "react-router";

export default function Setting() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="w-full ">
      {isOpen && (
        <div className=" px-4 py-2 absolute bg-gradient border border-[var(--border-radious)] shadow-2xl  top-12 max-sm:-left-8 -left-2 rounded-xl space-y-2">
          <Theme_toggle />
          <div className=" p-2 rounded-full bg-gradient text-[var(--text-secondary)] cursor-pointer border border-[var(--border-radious)]">
            <Link to={"/admin"}>
              <ShieldUser className="w-4 h-4 max-md:w-3 max-md:h-3" />
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setisOpen(!isOpen)}
        className="cursor-pointer  text-[var(--text-secondary)]/90 border border-[var(--border-radious)] px-2 py-1 rounded-md bg-gradient shadow-2xl"
      >
        <Cog size={32} />
      </button>
    </div>
  );
}
