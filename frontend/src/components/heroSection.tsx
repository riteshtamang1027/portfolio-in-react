import { Pencil } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeroSection() {
  return (
    <div className="relative lg:w-100 lg:h-136 md:w-84 md:h-124 sm:h-72 h-64 mt-8 rounded-md p-0.5 bg-gradient-to-b from-pink-700 via-violet-700 to-red-700 group cursor-pointer">
      {/* Profile Background Image */}
      <img
        src="https://plus.unsplash.com/premium_photo-1673967859849-c8a37fa85aeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt=""
        className="w-full h-full object-cover rounded-md"
      ></img>
      {/* this is a div to hover your profile section it show. */}
      <div className="absolute top-0 group-hover:bg-black/20 w-full h-full rounded-md duration-500"></div>

      {/* Edit your Profile Background Picture */}

      <Tooltip>
        <TooltipTrigger className=" absolute bottom-2 left-2 rounded-full bg-white p-2">
          <Pencil size={16} strokeWidth={1.5} />
        </TooltipTrigger>
        <TooltipContent className="">
          <p>Edit your picture</p>
        </TooltipContent>
      </Tooltip>

      {/* Profile Image section */}
      <div className="flex md:flex-row flex-col items-center gap-4 p-4 absolute md:top-1/2 md:-right-1/2 transform  -translate-y-1/2 max-md:left-1/2 max-md:-translate-x-1/2">
        <div className="lg:w-36 sm:w-32 lg:h-36 sm:h-32 w-28 h-28 rounded-full   ">
          {/* Profile Image. */}
          <img
            className="object-cover w-full h-full rounded-full "
            src="https://images.unsplash.com/photo-1748682170760-aba4b59da534?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          {/* you can edit your profile picture */}
          <Tooltip>
            <TooltipTrigger className=" absolute border top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-white p-2">
              <Pencil size={12} strokeWidth={1.5} />
            </TooltipTrigger>
            <TooltipContent className="">
              <p>Edit your picture</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div>
          <p className="text-lg font-medium opacity-80">Ritesh Tamang</p>
          <p className="opacity-70 font-medium">Web Developer</p>
          
        </div>
      </div>
    </div>
  );
}
