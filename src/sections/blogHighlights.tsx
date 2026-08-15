import { MoveRight } from "lucide-react";

export default function BlogHighlights() {
  return (
    <main className="px-38 py-8 space-y-16 border-b bg-surface">
      <section className="space-y-4">
        <p className="text-secondary-text text-xs tracking-widest">WRITING</p>
        <h2 className="text-4xl font-bold text-foreground/80 tracking-tight">
          From the blog
        </h2>
        <p className="text-muted-foreground tracking-wide">
          Notes on engineering, architecture, and the craft of shipping.
        </p>
      </section>

      {/* blog cards */}

     <div className="flex items-center justify-between gap-8">
         {blog.map((item, i) => (
        <section className="border rounded-xl w-1/3 bg-card cursor-pointer group ease-linear">
          <div key={i} className="h-64 overflow-hidden rounded-t-xl">
            <img className="h-64 w-full object-cover group-hover:scale-105 duration-300" src={item.image} alt="Image" />
          </div>
          <div className="px-4 py-8 flex flex-col gap-y-4">
            <div className="flex gap-x-4">
              <span
                className="bg-surface rounded-full px-2 py-0.5
                text-xs font-semibold text-foreground/80"
              >
                {item.type}
              </span>{" "}
              <span className="text-xs  text-muted-foreground">
                {item.time}
              </span>
            </div>
            <p className="text-lg font-semibold text-foreground/80 group-hover:text-secondary-text">
              {item.title}
            </p>
            <div className="flex opacity-0 items-center gap-x-1 group-hover:opacity-100 duration-300 group-hover:text-secondary-text text-muted-foreground">
              <span>Read aritcle</span>
              <MoveRight size={16} className="text-muted-foreground group-hover:text-secondary-text"/>
            </div>
          </div>
        </section>
      ))}
     </div>
    </main>
  );
}

const blog = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1701892428860-ca4913e92274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
    type: "Engineering",
    time: "8 min read",
    title: " Designing resilient server actions in modern React",
  },
  {
    image:
      "https://plus.unsplash.com/premium_vector-1734662648778-ca3ca43e7739?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    type: "Database",
    time: "12 min read",
    title: " Scaling Postgres to 10 billion rows without losing your weekend",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5mcmFzdHJ1Y3R1cmUlMjBkZXZlbG9wbWVudCUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
    type: "Infrastructure",
    time: "6 min read",
    title: " A pragmatic guide to multi-region deploys on Cloudflare",
  },
];
