import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={cn(
        "mx-auto flex min-h-screen flex-col bg-neutral-off-white px-4 font-sans text-[15px] text-neutral-very-dark-blue antialiased",
        fontSans.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
