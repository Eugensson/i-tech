import Link from "next/link";
import {
  GanttChart,
  Heart,
  ShoppingCart,
  UserCheck,
  UserPlus,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export const Header = () => {
  return (
    <header className="w-full">
      <p className="capitalize text-center bg-black text-white text-xs p-2">
        Summer sale for all swim suits and free express delivery - OFF 50%!{" "}
        <span className="font-bold">ShopNow</span>
      </p>
      <div className="container flex justify-between items-center h-20">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-4">
          <Input placeholder="Search" />
          <Button variant="ghost" size="icon">
            <Link href="/wishlist">
              <Heart size={20} />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="/cart">
              <ShoppingCart size={20} />
            </Link>
          </Button>
          <LoginButton>
            <Button variant="ghost" size="icon">
              <UserCheck size={20} />
            </Button>
          </LoginButton>
        </div>
        <div className="block md:hidden">
          <GanttChart size={20} />
        </div>
      </div>
    </header>
  );
};
