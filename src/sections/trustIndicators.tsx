export default function TrustIndicators() {
  return (
    <section className=" mt-8 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 border border-border bg-background w-full">
      <div className="grid md:grid-cols-4 grid-cols-2 items-center justify-center w-full gap-x-8 md:gap-8">
        {trustIndicators.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-1 md:py-8 py-4 text-center"
          >
            <span className="lg:text-3xl md:text-2xl text-xl font-semibold text-foreground">
              {item.number}
            </span>
            <span className="md:text-base sm:text-sm text-xs font-medium text-muted-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const trustIndicators = [
  {
    number: "60+",
    label: "Projects shipped",
  },
  {
    number: "20+",
    label: "Technologies",
  },
  {
    number: "30+",
    label: "Artical written",
  },
  {
    number: "1.2K",
    label: "Github stars",
  },
];
