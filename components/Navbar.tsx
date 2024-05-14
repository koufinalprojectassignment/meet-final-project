import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={64}
          height={64}
          alt="meet logo"
          className="sm:ml-0 max-sm:size-10 lg:ml-16 rounded-full "
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="flex items-center gap-1">
            <Button className="bg-white text-slate-800 hover:bg-slate-400">
              <strong>Login</strong>
            </Button>
          </Link>
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
