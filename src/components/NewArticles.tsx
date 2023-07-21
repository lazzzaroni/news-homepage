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
        <h2 className="text-xl font-bold leading-normal text-neutral-off-white">
          Hydrogen VS Electric Cars
        </h2>
        <p className="leading-loose">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold leading-normal text-neutral-off-white">
          The Downsides of AI Artistry
        </h2>
        <p className="leading-loose">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr />
      <div>
        <h2 className="text-xl font-bold leading-normal text-neutral-off-white">
          Is VC Funding Drying Up?
        </h2>
        <p className="leading-loose">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
}
