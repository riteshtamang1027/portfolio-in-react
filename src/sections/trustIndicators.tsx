export default function TrustIndicators() {
  return (
    <section className="flex items-center justify-between space-x-8 px-38 border-b border-border bg-background">
      {trustIndicators.map((item, index) => (
        <div key={index} className="flex flex-col justify-center space-y-1 py-8">
          <span className="text-3xl font-semibold text-foreground">{item.number}</span>
          <span className=" font-medium text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
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
