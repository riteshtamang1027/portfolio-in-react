import { MoveRight } from "lucide-react";

export default function BlogHighlights() {
  return (
    <main className="px-38 py-8 mt-8 space-y-16 border-b bg-surface">
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

      <section className="border rounded-xl w-1/3 bg-card ">
        <div className="h-64 overflow-hidden rounded-t-xl">
          <img
            className="h-64 object-cover"
            src="https://plus.unsplash.com/premium_photo-1701892428860-ca4913e92274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
            alt="Image"
          />
        </div>
        <div className="px-4 py-8 flex flex-col gap-y-4">
          <div className="flex gap-x-4">
            <span
              className="bg-surface-muted rounded-full px-2 py-0.5
                text-xs font-semibold text-foreground/80"
            >
              Engineering
            </span>{" "}
            <span className="text-xs  text-muted-foreground">8 min read</span>
          </div>
          <p className="text-lg font-semibold text-foreground/80">
            Designing resilient server actions in modern React
          </p>
          <div className="flex items-center gap-x-4">
            <span>Read aritcle</span>
            <MoveRight size={16} />
          </div>
        </div>
      </section>
    </main>
  );
}
