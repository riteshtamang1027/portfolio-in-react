import { CodeXml } from "lucide-react";

export default function Skills() {
  return (
    <main className="bg-surface-muted px-38 py-4">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">Toolkit</p>
        <h2 className="text-4xl font-bold text-foreground/80 tracking-tight">
          Skills & technologies
        </h2>
        <p className="text-muted-foreground tracking-wide">
          The stack I reach for when shipping real products.
        </p>
      </section>

      <section className="flex flex-col p-6 bg-background rounded-xl w-80 border gap-4">
        
        <div className="flex items-center gap-2">
          <div className="bg-surface-muted p-2 rounded-sm">
            <CodeXml className="text-accent-icon " size={16} />
          </div>
          <span className="font-semibold text-lg text-foreground/80 tracking-wide">
            Frontend
          </span>
        </div>

         <div className="flex items-center flex-wrap gap-2">
            {skillUsed.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-lg text-xs tracking-wide text-muted-foreground border border-ring bg-surface"
              >
                {skill}
              </span>
            ))}
          </div>

      </section>
    </main>
  );
}

const skillUsed = ["Remix", "tRPC", "Postgres", "Stripe", "Kubernetes"];
