import Link from "next/link";
import { MdOutlineComputer } from "react-icons/md";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-4xl font-bold text-red-500"
    >
      <MdOutlineComputer />
      iTech
    </Link>
  );
};
