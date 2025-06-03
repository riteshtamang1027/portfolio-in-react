import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface Itext {
  text: string;
  url: string;
}
interface Imenu {
  Items: Itext[];
}

export default function MobileMenu({ Items }: Imenu) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-pink-600 via-purple-600 to-red-600">
        <SheetHeader>
          <SheetTitle className="text-white">Ritesh Tamang</SheetTitle>
          <div className="space-y-4 text-center mt-12">
            {Items.map((item: Itext, index: number) => (
              <div key={index} className="space-y-2">
                <SheetDescription className="cursor-pointer font-medium text-white opacity-80">
                  {item.text.toUpperCase()}
                </SheetDescription>
                <hr />
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
