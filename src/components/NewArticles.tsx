import Link from "next/link";

import { cn } from "@/lib/utils";

export default function NewArticles() {
  return (
    <section
      className={cn(
        "flex w-full flex-col gap-7 bg-neutral-very-dark-blue p-5 text-neutral-grayish-blue"
      )}
    >
      <h1 className="text-[32px] font-bold leading-tight text-primary-soft-orange">
        New
      </h1>
      <div>
        <Link
          href="#"
          className="text-xl font-bold leading-normal text-neutral-off-white hover:text-primary-soft-orange"
        >
          Hydrogen VS Electric Cars
        </Link>
        <p className="leading-loose">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr />
      <div>
        <Link
          href="#"
          className="text-xl font-bold leading-normal text-neutral-off-white hover:text-primary-soft-orange"
        >
          The Downsides of AI Artistry
        </Link>
        <p className="leading-loose">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr />
      <div>
        <Link
          href="#"
          className="text-xl font-bold leading-normal text-neutral-off-white hover:text-primary-soft-orange"
        >
          Is VC Funding Drying Up?
        </Link>
        <p className="leading-loose">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
}
