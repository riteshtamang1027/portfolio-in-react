import { CodeXml } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex flex-1 px-40 py-2 bg-navbar-backgroun/80 min-w-full border-b border-border justify-between">
        {/* logo */}
        <div className="flex items-center">
            <CodeXml className="text-accent-icon" strokeWidth={2.8} size={32}/> <span className="font-semibold text-2xl text-primary">RL</span>
        </div>

        {/* links */}
        <div className="flex items-center space-x-8">
        <NavLink to={""}>

            <span>About</span>
        </NavLink>
            <span>Projects</span>
            <span>Skills</span>
            <span>Experiences</span>
            <span>Blog</span>
            <span>Contact</span>
           
        </div>

        {/* right side nav */}

        <div>
            right side nav
        </div>


      
    </nav>
  )
}
