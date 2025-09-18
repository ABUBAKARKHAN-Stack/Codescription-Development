"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Particles from "@/components/ui/particles";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle, Home } from "lucide-react";

const NotFound = () => {
  const router = useRouter();

  return (
    <main className="h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center relative">
      {/* Main content */}
      <div className="relative z-10 pt-20 flex flex-col lg:flex-row items-center justify-center gap-12 p-6 max-w-6xl mx-auto">
        {/* Animation container */}
        <div className="flex-shrink-0 max-w-md">
          <DotLottieReact
            src="/assets/animations/not-found-2.json"
            loop
            autoplay
            className="size-full drop-shadow-2xl"
          />
        </div>

        {/* Content section */}
        <div className="text-center lg:text-left space-y-8 flex-1">
          {/* Error message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Oops!
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-medium">
              Could not find requested resource
            </p>
            <p className="text-neutral-300 text-lg max-w-md mx-auto lg:mx-0">
              The page you're looking for seems to have vanished into the digital void.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">

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
              className="rounded-full !p-7 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-input/85 md:text-lg"
            >
              <ArrowLeftCircle
                className="size-5 scale-105"
              /> Go Back
            </Button>
          </div>
        </div>
      </div>
      <Particles />
    </main>
  )
}

export default NotFound