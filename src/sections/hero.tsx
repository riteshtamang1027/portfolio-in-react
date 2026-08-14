import { ArrowRight, Circle, Dot, Download } from "lucide-react";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center bg-background border-b py-8 px-120  text-center space-y-4">
      <div className="flex items-center space-x-2 border border-ring rounded-full px-2 py-0.5 w-max text-xs text-secondary-text bg-subtle/30 tracking-wide mt-4">
        {" "}
        <Circle
          size={8}
          strokeWidth={1.5}
          className="fill-accent-icon animate-pulse"
        />{" "}
        <span>Available for new opportunities</span>
      </div>
      {/* hero */}
      <section className="space-y-4 mt-4">
        <p className="text-lg tracking-tight font-semibold text-muted-foreground">
          HELLO, I'M
        </p>
        <h1 className="text-6xl font-bold tracking-tight text-foreground/80">
          Ritesh Lama
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-muted-foreground">
          Full Stack Developer & Software Engineer
        </h2>
        <div className="flex space-x-1 items-center justify-center">
          <span className="border-b border-border w-16"></span>
          <Dot size={34} className="text-accent-icon" />
          <span className="border-b border-border w-16"></span>
        </div>
        {/* about  */}
        <p className="text-lg font-medium leading-1.625 text-muted-foreground">
          I build robust, production-grade web applications. Obsessed with
          performance, clean architecture, and delivering exceptional user
          experiences.
        </p>

        {/* button */}
        <div className="flex items-center space-x-4 justify-center mt-8">
          <button className="px-4 py-2 text-sm font-semibold cursor-pointer border rounded-md flex items-center space-x-2 bg-foreground text-background hover:bg-primary/80 transform duration-300">
            <span>View projects</span> <ArrowRight size={18} />
          </button>
          <button className="px-4 py-2 text-sm font-semibold cursor-pointer border rounded-md flex items-center space-x-2 bg-background text-foreground hover:bg-primary-foreground/80 transform duration-300">
            <Download size={18} />
            <span>Download resume</span>
          </button>
        </div>
      </section>
      {/* skills */}
      <div className="flex space-x-4 mt-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-ring rounded-full px-4 py-1 text-xs bg-background text-muted-foreground "
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
