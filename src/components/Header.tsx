import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Logo, MenuClose, MenuOpen } from "./Icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        "flex items-center justify-center pb-7 pt-7",
        "md:pb-10 md:pt-20"
      )}
    >
      <span className="mr-auto block">
        <Logo className={cn("h-[28px] w-auto", "md:h-10")} />
      </span>
      <nav className="h-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-8 w-full md:hidden"
        >
          <MenuOpen />
        </button>
        <div
          className={cn(
            "invisible absolute left-0 top-0 h-screen w-screen translate-x-full bg-neutral-very-dark-blue/50 opacity-0 transition-all duration-200 md:hidden",
            {
              "no-scroll visible translate-x-0 opacity-100": isOpen,
            }
          )}
        >
          <div
            className={cn(
              "ml-auto flex h-full w-[68%] flex-col bg-neutral-off-white"
            )}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mx-4 my-7 h-8 place-self-end md:hidden"
            >
              <MenuClose />
            </button>
            <ul className="mx-7 my-14 flex flex-col gap-5 text-lg md:hidden">
              <li>
                <Link href="#" className="hover:text-primary-soft-orange">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-soft-orange">
                  New
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-soft-orange">
                  Popular
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-soft-orange">
                  Trending
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-soft-orange">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="hidden text-neutral-dark-grayish-blue md:flex md:h-8 md:items-center md:justify-center md:gap-10">
          <li>
            <Link href="#" className="hover:text-primary-soft-orange">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary-soft-orange">
              New
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary-soft-orange">
              Popular
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary-soft-orange">
              Trending
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary-soft-orange">
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
