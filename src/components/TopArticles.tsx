import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="#"
            className="text-lg font-extrabold leading-relaxed hover:text-primary-soft-orange"
          >
            Reviving Retro PCs
          </Link>
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
          <Link
            href="#"
            className="text-lg font-extrabold leading-relaxed hover:text-primary-soft-orange"
          >
            Top 10 Laptops of 2022
          </Link>
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
          <Link
            href="#"
            className="text-lg font-extrabold leading-relaxed hover:text-primary-soft-orange"
          >
            The Growth of Gaming
          </Link>
          <p className="text-neutral-dark-grayish-blue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </section>
  );
}
