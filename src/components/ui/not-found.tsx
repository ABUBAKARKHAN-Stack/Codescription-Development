"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Particles from "@/components/ui/particles";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, Home } from "lucide-react";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 p-6 pt-20 lg:flex-row">
        {/* Animation container */}
        <div className="max-w-md flex-shrink-0">
          <DotLottieReact
            src="/assets/animations/not-found-2.json"
            loop
            autoplay
            className="size-full drop-shadow-2xl"
          />
        </div>

        {/* Content section */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Oops!</h1>
            <p className="text-xl font-medium text-neutral-200 md:text-2xl">
              Could not find requested resource
            </p>
            <p className="mx-auto max-w-md text-lg text-neutral-300 lg:mx-0">
              The page you're looking for seems to have vanished into the
              digital void.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              size={"lg"}
              onClick={() => router.push("/")}
              className="group overflow-hidden rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-purple-500/25 md:text-lg"
            >
              Return Home
              <div className="relative">
                <Home className="size-5 -translate-y-0 opacity-100 transition-all duration-300 ease-in-out group-hover:-translate-y-20 group-hover:scale-0 group-hover:opacity-0" />
                <Home className="absolute inset-0 size-5 translate-y-20 scale-0 opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-0 group-hover:scale-105 group-hover:opacity-100" />
              </div>
            </Button>

            <Button
              variant={"outline"}
              onClick={() => router.back()}
              className="hover:shadow-input/85 rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer md:text-lg"
            >
              <ArrowLeftCircle className="size-5 scale-105" /> Go Back
            </Button>
          </div>
        </div>
      </div>
      <Particles />
    </main>
  );
};

export default NotFound;
