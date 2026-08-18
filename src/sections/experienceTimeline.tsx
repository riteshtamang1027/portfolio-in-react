export default function ExperienceTimeline() {
  return (
    <main className="px-38 py-16 space-y-12 border-b bg-background">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">CAREER</p>
        <h2 className="text-4xl font-bold text-foreground/80 tracking-wide">
          Experience
        </h2>
        <p className="text-muted-foreground tracking-wide">
          Seven years building software for startups and growth-stage companies.
        </p>
      </section>

      {/* experience timeline */}

      <section className="flex flex-col px-42 gap-8">
        {experienceLine.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-4 border-l px-8 pt-4"
          >
            <div className="absolute w-2 h-2 rounded-full bg-muted-points  ring-4 ring-ring/20 -left-1.5 transform  -top-1.5"></div>
            <p className="absolute -top-3 text-xs text-secondary-text font-medium">
              {item.year}
            </p>
            <div className="space-y-1">
              <h4 className="text-foreground/80 font-semibold text-xl">
                {item.role}
              </h4>
              <p className="text-muted-foreground text-sm">{item.type}</p>
            </div>

            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

const experienceLine = [
  {
    year: "2023 — Present",
    role: "Senior Full Stack Engineer",
    type: "Linear-scale SaaS · Remote",
    description:
      "Lead the platform team building a multi-tenant analytics product. Drove a migration to edge-rendered React, cutting p75 TTFB by 62%.",
  },
  {
    year: "2021 — 2023",
    role: "Full Stack Engineer",
    type: "Northwind Labs · New York",
    description:
      "Owned the checkout and payments domain end-to-end. Shipped 14 production services and mentored 4 engineers.",
  },
  {
    year: "2019 — 2021",
    role: "Software Engineer",
    type: "Helio Studio · Berlin",
    description:
      "Built bespoke web platforms for fintech and healthtech clients. Established the studio's TypeScript design system.",
  },
];
