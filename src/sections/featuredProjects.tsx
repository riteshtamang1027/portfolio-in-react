import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";

export default function FeaturedProjects() {
  return (
    <main id="projects" className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 mt-16 space-y-12 bg-backgroud">
      
      {/* header */}
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">
          FEATURED WORK
        </p>
        <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-foreground/80 tracking-wide">
          Selected projects
        </h2>
        <p className="text-muted-foreground tracking-wide md:text-base text-sm">
          A handful of recent systems I've designed, built, and shipped to
          production.
        </p>
      </section>

      <div className="flex flex-col justify-center gap-8">
        {project.map((item, index) => (
        <section
          key={index}
          className={`flex md:flex-row flex-col items-center justify-between gap-8 border border-border rounded-xl md:p-8 w-full overflow-hidden ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} `}
        >
          {/* image */}
          <img
            className="md:w-1/2 w-full md:rounded-xl  object-cover cursor-pointer h-72"
            src={item.image}
            alt="Image"
          />
          <div className="md:w-1/2 space-y-4 w-full px-4 pb-4">
            {/* number of project or case study number */}
            <p className="text-xs font-semibold text-secondary-text tracking-wider">
              {item.caseId}
            </p>
            {/* project title */}
            <h3 className="md:text-3xl text-lg text-foreground/80 font-semibold">
              {item.title}
            </h3>
            {/* description */}
            <p className="text-muted-foreground md:text-base text-sm tracking-wide">
              {item.description}
            </p>

            {/* tools used during develop the project */}
            <div className="flex flex-wrap items-center gap-2">
              {item.skillUsed.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg text-xs tracking-wide text-muted-foreground border border-ring bg-surface"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* source code and live demo */}
            <section className="flex items-center space-x-6">
              {/* source code section */}
              <div className="flex items-center space-x-1  ">
                <LuGithub size={16} />
                <span className="text-foreground text-sm font-medium">
                  Source
                </span>
              </div>

              {/* live demo code */}
              <div className="flex items-center space-x-1  ">
                <span className="text-foreground text-sm font-medium">
                  Live demo
                </span>{" "}
                <ArrowUpRight size={16} />
              </div>
            </section>
          </div>
        </section>
      ))}
      </div>
    </main>
  );
}

const project = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1733317290375-d39da9fcc8e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5vbG9neSUyMHBpcGVsaW5lfGVufDB8fDB8fHww",
    caseId: "CASE STUDY 01",
    title: "Lumen Analytics",
    description:
      " Self-serve analytics platform processing 4B+ events/month with a sub-200ms query layer over ClickHouse.",
    skillUsed: ["Next.js", "TypeScript", "ClickHouse", "Kafka", "Kubernetes"],
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1700830193301-99e1c863ee38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXdzfGVufDB8fDB8fHww",
    caseId: "CASE STUDY 02",
    title: "Northwind Commerce",
    description:
      " Headless commerce engine with composable storefronts, server actions, and an event-driven order pipeline.",
    skillUsed: ["Remix", "tRPC", "Postgres", "Stripe", "Kubernetes"],
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww",
    caseId: "CASE STUDY 03",
    title: "Forge CLI",
    description:
      " An opinionated developer toolchain that scaffolds, tests, and deploys full-stack apps in under 90 seconds.",
    skillUsed: ["Rust", "Node.js", "Docker", "Turborepo"],
  },
];
