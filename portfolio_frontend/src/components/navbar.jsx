import Tooltip from "@mui/material/Tooltip";
import {
  BriefcaseBusiness,
  FileUser,
  House,
  Mail,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";


export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <motion.div 
    initial={{opacity:0, x:100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1,delay:0.5}}
    
    
    className="xl:px-64 lg:px-32 md:px-16 sm:px-32 px-4">
      <div className="md:relative md:top-8 md:left-1/2 md:transform md:-translate-x-1/2 md:w-max px-4 py-2 bg-gray-600/70 shadow-2xl rounded-2xl">
        <div className="flex items-center justify-between sm:gap-8 md:gap-16 w-full">
          {icons.map((item, index) => (
            <Tooltip
              key={index}
              title={item.i_name}
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#0891b2", // tooltip background
                    color: "black", // tooltip text
                    fontSize: "0.8rem",
                  },
                },
              }}
            >
              <motion.div
              initial={{opacity:0, x:50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1, delay:0.8}}
              >
                <Link to={item.path}
                onClick={() => setActiveIndex(index)}
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <item.icon
                  size={26}
                  className={`${
                    activeIndex === index
                      ? "text-cyan-600"
                      : "text-white hover:text-cyan-600"
                  } `}
                  strokeWidth={1}
                />
              </Link>
              </motion.div>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const icons = [
  { icon: House, i_name: "Home",path:"/" },
  { icon: UserRound, i_name: "About",path:"/about"  },
  { icon: FileUser, i_name: "Resume" },
  { icon: BriefcaseBusiness, i_name: "Portfolio" },
  { icon: Mail, i_name: "Contact" },
];
