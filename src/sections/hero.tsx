export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <p className="border border-border rounded-full px-2 py-0.5 w-max text-xs text-secondary-text bg-subtle/40 tracking-wide">Available for new opportunities</p>
      <section>
        <p className="text-lg tracking-tight font-semibold text-muted-foreground">HELLO, I'M</p>
        <h1 className="text-6xl font-bold tracking-tight leading-1.1 text-foreground">
          Ritesh Lama
        </h1>
        <h2 className="text-4xl font-bold tracking-tight leading-1.2 text--mutedforeground">
          Full Stack Developer & Software Engineer
        </h2>
        <p className="text-lg font-medium leading-1.625 text-muted-foreground">
          I build robust, production-grade web applications. Obsessed with
          performance, clean architecture, and delivering exceptional user
          experiences.
        </p>
      </section>
    </main>
  );
}
