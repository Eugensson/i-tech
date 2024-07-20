import { Poppins } from "next/font/google";
import { ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4">
      <h1
        className={cn(
          "text-3xl font-semibold flex items-center gap-2",
          poppins.className
        )}
      >
        <ShieldCheck size={30} />
        Authentication
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
