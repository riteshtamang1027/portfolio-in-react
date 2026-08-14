export default function ExperienceTimeline() {
  return (
    <main className="px-38 py-8 mt-8 space-y-8 border-b">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">Career</p>
        <h2 className="text-4xl font-bold text-foreground/80 tracking-tight">
          Experience
        </h2>
        <p className="text-muted-foreground tracking-wide">
          Seven years building software for startups and growth-stage companies.
        </p>
      </section>

      {/* experience timeline */}
      <section>
        <div className="relative flex flex-col gap-4 border-l px-8">
            <div className="absolute w-2.5 h-2.5 rounded-full bg-muted-points  ring-4 ring-ring/20 -left-1.5 transform  -top-1.5"></div>
            <p>
                2023 — Present
            </p>
           <div>
             <h4>Senior Full Stack Engineer</h4>
            <p>Linear-scale SaaS · Remote</p>
           </div>

            <p>Lead the platform team building a multi-tenant analytics product. Drove a migration to edge-rendered React, cutting p75 TTFB by 62%.</p>
        </div>
      </section>
    </main>
  );
}
