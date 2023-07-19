import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Container() {
  return (
    <>
      <header className="flex py-4">
        <span className="mr-auto">Logo</span>
        <nav>
          <ul className="flex">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </header>
      <main
        className={cn("grid grid-cols-1 gap-16", "md:grid-cols-3 md:gap-2")}
      >
        <section
          className={cn(
            "grid grid-cols-1 gap-4 bg-purple-300",
            "md:col-span-2 md:grid-cols-2"
          )}
        >
          <picture
            className={cn("mb-2 bg-purple-600", "md:col-span-2 md:mb-0")}
          >
            picture
          </picture>
          <h1
            className={cn(
              "bg-yellow-400 text-[40px] font-extrabold leading-none",
              "md:text-5xl"
            )}
          >
            The Bright Future of Web 3.0?
          </h1>
          <div className={cn("bg-pink-600", " ")}>
            <p className="pb-6 leading-relaxed">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-primary-soft-red px-8 py-4 text-sm font-bold uppercase tracking-[0.3em] text-neutral-off-white">
              Read more
            </button>
          </div>
        </section>
        <section className="bg-red-300">
          <h1>New</h1>
          <div>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div>
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div>
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>
        <section
          className={cn(
            "flex flex-col bg-green-300",
            "md:col-span-3 md:flex-row"
          )}
        >
          <article className="flex bg-cyan-400">
            <Image
              src=""
              alt=""
              width={0}
              height={0}
              className="h-full w-1/3"
            />
            <div>
              <span>01</span>
              <h2>Reviving Retro PCs</h2>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
          <article className="flex bg-blue-400">
            <Image
              src=""
              alt=""
              width={0}
              height={0}
              className="h-full w-1/3"
            />
            <div>
              <span>02</span>
              <h2>Top 10 Laptops of 2022</h2>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </article>
          <article className="flex bg-amber-400">
            <Image
              src=""
              alt=""
              width={0}
              height={0}
              className="h-full w-1/3"
            />
            <div>
              <span>03</span>
              <h2>The Growth of Gaming</h2>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
