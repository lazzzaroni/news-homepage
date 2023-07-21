import Image from "next/image";

import { cn } from "@/lib/utils";

export default function TopArticles() {
  return (
    <section
      className={cn("grid grid-cols-1 gap-8", "md:col-span-3 md:grid-cols-3")}
    >
      <article className="flex gap-7">
        <Image
          src="/images/image-retro-pcs.jpg"
          alt=""
          width={200}
          height={254}
          className="h-full w-auto object-cover md:w-1/3"
        />
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-bold leading-none text-neutral-grayish-blue">
            01
          </span>
          <h2 className="text-lg font-extrabold leading-relaxed">
            Reviving Retro PCs
          </h2>
          <p className="text-neutral-dark-grayish-blue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </article>
      <article className="flex gap-7">
        <Image
          src="/images/image-top-laptops.jpg"
          alt=""
          width={200}
          height={254}
          className="h-full w-auto object-cover md:w-1/3"
        />
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-bold leading-none text-neutral-grayish-blue">
            02
          </span>
          <h2 className="text-lg font-extrabold leading-relaxed">
            Top 10 Laptops of 2022
          </h2>
          <p className="text-neutral-dark-grayish-blue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </article>
      <article className="flex gap-7">
        <Image
          src="/images/image-gaming-growth.jpg"
          alt=""
          width={200}
          height={254}
          className="h-full w-auto object-cover md:w-1/3"
        />
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-bold leading-none text-neutral-grayish-blue">
            03
          </span>
          <h2 className="text-lg font-extrabold leading-relaxed">
            The Growth of Gaming
          </h2>
          <p className="text-neutral-dark-grayish-blue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </section>
  );
}
