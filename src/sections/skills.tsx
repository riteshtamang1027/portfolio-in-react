import { Cloud, CodeXml, Database, Server,Infinity, Terminal  } from "lucide-react";

export default function Skills() {
  return (
    <main className="bg-surface px-38 mt-16 py-16 space-y-12 border-x border">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">Toolkit</p>
        <h2 className="text-4xl font-bold text-foreground/80 tracking-wide">
          Skills & technologies
        </h2>
        <p className="text-muted-foreground tracking-wide">
          The stack I reach for when shipping real products.
        </p>
      </section>

      <div className="grid grid-cols-3 items-center gap-4">
        {skills.map((item, index) => (
        <section
          key={index}
          className="flex flex-col p-6 bg-background rounded-xl border gap-4 h-40"
        >
          <div className="flex items-center gap-2">
            <div className="bg-surface-muted p-2 rounded-sm">
              <item.icon className="text-accent-icon " size={16} />
            </div>
            <span className="font-semibold text-lg text-foreground/80 tracking-wide">
              {item.label}
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {item.tools.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg text-xs tracking-wide text-muted-foreground border border-ring bg-surface"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      ))}
      </div>
    </main>
  );
}

const skills = [
  {
    icon: CodeXml,
    label: "Frontend",
    tools: ["React", "Next.js", "Tailwind", "TypeScript(TS)","JavaScript(JS)"],
  },
  {
    icon: Server,
    label: "Backend",
    tools: ["Node.js", "GraphQL", "Python", "Java", "PHP"],
  },
  {
    icon: Database,
    label: "Database",
    tools: ["MongoDB", "Postgres", "Prisma", "SQL"],
  },
  {
    icon: Cloud,
    label: "Cloud",
    tools: ["AWS", "Cloudflare", "Vercel", "GCP"],
  },
   {
    icon: Infinity,
    label: "DevOps",
    tools: ["Docker", "Kubernetes", "Terraform", "GH Actions"],
  },
  {
    icon: Terminal,
    label: "Tools",
    tools: ["Git", "Figma", "Linear", "Datadog"] ,
  },
];
