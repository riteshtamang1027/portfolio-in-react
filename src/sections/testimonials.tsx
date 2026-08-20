export default function Testimonials() {
  return (
    <main className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 py-16 space-y-12 border-b">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">
          TESTIMONIALS
        </p>
        <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-foreground/80 tracking-wide">
          What collaborators say
        </h2>
        <p className="text-muted-foreground md:text-base text-sm tracking-wide">
          Notes on engineering, architecture, and the craft of shipping.
        </p>
      </section>
      {/* comment box */}
      <section className="grid xl:grid-cols-3 md:grid-cols-2  gap-4 w-full">
        {testimonial.map((item, i) => (
          <div
            key={i}
            className="flex flex-col px-6 py-8  border rounded-xl gap-6"
          >
            <p className="border-b tracking-wider text-base max-sm:text-sm text-foreground/80 pb-4">
              "{item.comment}"
            </p>
            <div className="flex items-center gap-x-3">
              <p className="rounded-full bg-accent-icon/20 p-4 md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6 flex items-center justify-center text-secondary-text">
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
