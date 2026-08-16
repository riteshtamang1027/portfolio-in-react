export default function ContactCTA() {
  return (
    <main className="px-38 py-20 space-y-16 bg-background">
      <div className="flex items-center justify-between gap-32 border rounded-4xl bg-accent-foreground p-20">
        <div className="w-2/3 flex flex-col gap-8">
          <h1 className="text-primary-foreground text-5xl font-semibold leading-14">
            Let's build something great together.
          </h1>
          <p className="text-base text-accent/80">
            I'm taking on a small number of engagements next quarter. If you're
            building something ambitious, I'd love to hear about it.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-end justify-end gap-4 ">
          <button className="border bg-card w-max rounded-lg px-5 py-3 font-semibold text-sm">
            Contact me
          </button>
          <button className="border border-border text-secondary w-max rounded-lg px-5 py-3 font-semibold text-sm">
            Schedule a meeting
          </button>
        </div>
      </div>
    </main>
  );
}
