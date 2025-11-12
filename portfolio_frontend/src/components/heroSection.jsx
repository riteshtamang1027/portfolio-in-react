import Tooltip from "@mui/material/Tooltip";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function heroSection() {
  return (
    <div className="xl:px-64 lg:px-32 md:px-16 px-4 sm:px-32 max-md:mt-4 text-white h-screen">
      {/* main div */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:relative border border-cyan-600 px-4 py-4 md:top-1/2 md:transform md:-translate-y-1/2 bg-[linear-gradient(to_left,var(--custom-a0),var(--custom-a10),var(--custom-a20),var(--custom-a30),var(--custom-a40))] rounded-2xl shadow-2xl space-y-8"
      >
        {/* Header section */}
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-white lg:text-3xl md:text-2xl text-3xl font-bold"
        >
          Port <span className="text-cyan-500">Folio</span>
        </motion.p>

        {/* components sections */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full  xl:gap-16 gap-4 py-2 sm:px-4">
          {/* left div where introduction section */}
          <div className="md:w-2/3 space-y-8 md:order-1 order-2 max-md:text-center  py-2  max-md:px-4">
            {/* text section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5 }}
              className="text-base space-y-2 md:space-y-4 "
            >
              <div className="space-y-1 md:space-y-2 ">
                <p className="text-xl font-bold opacity-90">Hi, I'm</p>
                <p className="lg:text-3xl text-2xl  font-bold text-cyan-500">{`Ritesh Tamang`}</p>
              </div>
              <p className="lg:text-2xl text-xl  font-bold">
                I'm{" "}
                <span className="text-cyan-500">
                  {" "}
                  <Typewriter
                    words={["Frontend Developer", "Learning Next.Js"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>{" "}
              </p>
              <p className="font-semibold opacity-80 lg:text-base sm:text-sm text-xs sm:trackind-wide tracking-widest">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                sit distinctio, harum necessitatibus incidunt amet eius dolores
                alias enim quam qui repellat facere sunt .
              </p>
            </motion.div>

            {/* button section */}
            <div className="flex items-center justify-between gap-12 ">
              {/* CV download button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
              >
                <button className="relative overflow-hidden px-4 py-2 rounded-full lg:text-sm text-xs font-semibold text-black/60 bg-cyan-500/80 cursor-pointer border-transparent border transition-all duration-1000 hover:scale-105 hover:text-cyan-500 hover:border-cyan-600 hover:bg-transparent">
                  <span className="relative z-10 whitespace-nowrap">
                    Download CV
                  </span>
                  <span className="absolute inset-0 bg-cyan-500/80 transform -translate-x-full hover:translate-x-0 transition-transform duration-1000 delay-150 rounded-full"></span>
                </button>
              </motion.div>

              {/* social media sections */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, delay: 0.8 }}
                className="flex items-center gap-4"
              >
                {mediaIcon.map((Icon, index) => (
                  <div key={index}>
                    <Tooltip
                      title={Icon.i_name}
                      placement="top"
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#06b6d4", // tooltip background
                            color: "black", // tooltip text
                            fontSize: "0.7rem",
                          },
                        },
                      }}
                    >
                      <div className="border p-2 rounded-full border-cyan-500 cursor-pointer transition-transform hover:scale-110  hover:ring-cyan-300 hover:ring-2 hover:ring-offset-1 hover:ring-offset-transparent duration-300">
                        <Icon.icon className="text-cyan-500 w-5 h-5 md:w-6 md:h-6 " />
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Image container section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.5, delay: 0.7 }}
            className="md:w-1/3   overflow-hidden  order-1 md:order-2"
          >
            <div className="w-full cursor-pointer rounded-full overflow-hidden max-md:w-64 max-md:h-64 ">
              <img
                className="rounded-full hover:scale-125 duration-300"
                src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                alt="Image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const mediaIcon = [
  {
    icon: Facebook,
    i_name: "Facebook",
  },
  {
    icon: Linkedin,
    i_name: "Linkedin",
  },
  {
    icon: Instagram,
    i_name: "Instagram",
  },
  {
    icon: Github,
    i_name: "Github",
  },
];
