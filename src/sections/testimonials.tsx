export default function Testimonials() {
  return (
    <main className="px-38 py-16 space-y-12 border-b">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl font-bold text-foreground/80 tracking-wide">
          What collaborators say
        </h2>
        <p className="text-muted-foreground tracking-wide">
          Notes on engineering, architecture, and the craft of shipping.
        </p>
      </section>
      {/* comment box */}
      <section className="flex items-center gap-4 justify-between">
        {testimonial.map((item, i) => (
          <div
            key={i}
            className="flex flex-col px-6 py-8 w-max border rounded-xl gap-6"
          >
            <p className="border-b tracking-wider text-foreground/80 pb-4">
              "{item.comment}"
            </p>
            <div className="flex items-center gap-x-3">
              <p className="rounded-full bg-accent-icon/20 p-4 w-10 h-10 flex items-center justify-center text-secondary-text">
                {item.profile}
              </p>
              <div className="">
                <span className="text-sm text-foreground/80 font-semibold">
                  {item.userName}
                </span>
                <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
                  <span>{item.userRole} </span>.<span>{item.address}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

const testimonial = [
  {
    comment:
      "Alex consistently delivered production-grade systems with the rigor of a staff engineer. Rare combination of taste and depth.",
    profile: "S",
    userName: "Sarah Patel",
    userRole: "VP Engineering",
    address: "Northwind",
  },
  {
    comment:
      "He architected our design system and shipped it across nine client projects. Our velocity doubled within a quarter.",
    profile: "H",
    userName: "Helio Studio",
    userRole: "CTO ",
    address: "Helio Studio",
  },
  {
    comment:
      "Beyond engineering, Alex thinks like a product owner. Every PR raises the bar for the whole team.",
    profile: "L",
    userName: "Lumen",
    userRole: "Product Lead",
    address: "Elena Rossi",
  },
];
