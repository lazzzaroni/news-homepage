import { cn } from "@/lib/utils";

import Header from "./Header";
import Hero from "./Hero";
import NewArticles from "./NewArticles";
import TopArticles from "./TopArticles";

export default function Container() {
  return (
    <>
      <Header />
      <main
        className={cn(
          "mb-20 grid grid-cols-1 gap-16",
          "md:grid-cols-3 md:gap-x-8 md:gap-y-16"
        )}
      >
        <Hero />
        <NewArticles />
        <TopArticles />
      </main>
    </>
  );
}
