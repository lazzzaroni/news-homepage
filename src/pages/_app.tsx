import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div
      className={cn(
        "relative mx-auto flex min-h-screen flex-col bg-neutral-off-white px-4 font-sans text-[15px] text-neutral-very-dark-blue antialiased lg:w-[79%]",
        fontSans.variable
      )}
    >
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
