import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      className={cn(
        "grid grid-cols-1 gap-4",
        "md:col-span-2 md:grid-cols-2 md:gap-x-8 md:gap-y-10"
      )}
    >
      <picture className={cn("mb-2", "md:col-span-2 md:mb-0")}>
        <source
          media="(min-width:768px)"
          srcSet="/images/image-web-3-desktop.jpg"
        />
        <img
          src="/images/image-web-3-mobile.jpg"
          alt="Article Image"
          className="h-full w-full object-cover"
        />
      </picture>
      <h1
        className={cn(
          "text-[40px] font-extrabold leading-none",
          "md:text-[56px]"
        )}
      >
        The Bright Future of Web 3.0?
      </h1>
      <div>
        <p className="pb-6 leading-relaxed text-neutral-dark-grayish-blue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-primary-soft-red px-8 py-4 text-sm font-bold uppercase tracking-[0.3em] text-neutral-off-white hover:bg-neutral-very-dark-blue">
          Read more
        </button>
      </div>
    </section>
  );
}
