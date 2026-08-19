import { ArrowRight, Circle, Download } from "lucide-react";
import Button from "../components/ui/button";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center bg-background  py-8 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36  text-center space-y-4">

      {/* about your self */}
      <div className="flex flex-col items-center justify-center w-full lg:w-2/3 xl:w-1/2 space-y-4">
        <div className="flex items-center space-x-2 border  rounded-full px-2 py-0.5 w-max text-xs text-secondary-text bg-subtle/16 tracking-wide mt-4">
        {" "}
        <div className="relative flex items-center justify-center">
          <Circle size={8} strokeWidth={1.5} className="fill-accent-icon" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-1 rounded-full ring-3 ring-ring/40 animate-ping" />
        </div>{" "}
        <span>Available for new opportunities</span>
      </div>
      {/* hero */}
      <section className="space-y-4 mt-4">
        <p className="md:text-lg text-base tracking-wider font-semibold text-muted-foreground">
          HELLO, I'M
        </p>
        <h1 className="md:space-x-6 md:text-5xl text-3xl space-x-4 font-bold ">
         <span className="text-foreground/90 tracking-wider">RITESH</span> <span className="text-accent-icon tracking-wider">LAMA</span>
        </h1>
        <h2 className="md:text-2xl text-lg font-semibold tracking-wider text-muted-foreground">
          Full Stack Developer & Software Engineer
        </h2>
        <div className="flex space-x-2 items-center justify-center">
          <span className="border-b border-border w-16"></span>
        
          <div className="w-2 h-2 bg-secondary-text rounded-full"></div>
          <span className="border-b border-border w-16"></span>
        </div>
        {/* about  */}
        <p className="md:text-lg font-medium leading-1.625 text-muted-foreground tracking-wider">
          I build robust, production-grade web applications. Obsessed with
          performance, clean architecture, and delivering exceptional user
          experiences.
        </p>

        {/* button */}
        <div className="flex items-center space-x-4 justify-center mt-8">
          <Button
            icon={<ArrowRight className=" w-4 h-4 md:w-5 md:h-5" />}
            className="md:px-4  px-2 py-2 gap-1 text-xs md:text-sm font-semibold cursor-pointer border rounded-md flex items-center flex-row-reverse md:gap-2 bg-foreground text-background hover:bg-primary/80 transform duration-300"
          >
            View projects
          </Button>

          <Button
            icon={<Download  className=" w-4 h-4 md:w-5 md:h-5" />}
            className="md:px-4  px-2 py-2 gap-1 text-xs md:text-sm font-semibold cursor-pointer border rounded-md flex items-center md:gap-2 bg-background text-foreground hover:bg-primary-foreground/80 transform duration-300"
          >
            Download resume
          </Button>
        </div>
      </section>
      </div>
      {/* skills */}
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-ring rounded-full md:px-4 px-3 py-1 text-xs bg-background text-muted-foreground "
          >
            {skill}
          </div>
        ))}
      </div>
    </main>
  );
}

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Express",
  "MongoDB",
];
