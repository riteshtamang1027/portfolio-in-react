import { Calendar, Mail } from "lucide-react";
import Button from "../components/ui/button";

export default function ContactCTA() {
  return (
    <main id="contact" className="px-8 sm:px-12 md:px-16 lg:px-24 xl:px-36 py-20 space-y-16 bg-background">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-8 border rounded-4xl bg-accent-foreground xl:p-20 p-8">
        <div className="lg:w-2/3 flex flex-col gap-8">
          <h1 className="text-primary-foreground xl:text-5xl md:text-4xl sm:text- text-xl font-semibold md:leading-14">
            Let's build something great together.
          </h1>
          <p className="sm:text-base text-sm text-accent/80">
            I'm taking on a small number of engagements next quarter. If you're
            building something ambitious, I'd love to hear about it.
          </p>
        </div>
        <div className="lg:w-1/3 flex flex-col lg:items-end lg:justify-end gap-4 w-full ">
          {/* contact button */}
          <Button
            icon={<Mail size={15} className="text-foreground/90" />}
            className="border bg-card lg:w-max rounded-lg px-5 py-3 font-semibold text-sm flex items-center justify-center text-foreground/90 gap-2  cursor-pointer"
          >
            Contact me{" "}
          </Button>

          {/* Scheduling button */}
          <Button
            icon={<Calendar size={15} className="text-secondary/90" />}
            className="border border-border text-secondary/90 lg:w-max rounded-lg px-5 py-3 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            {" "}
            Schedule a meeting{" "}
          </Button>
        </div>
      </div>
    </main>
  );
}
