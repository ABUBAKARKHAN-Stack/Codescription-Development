"use client";

import { AlertTriangleIcon, RefreshCwIcon, BookOpenIcon } from "lucide-react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function BlogError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Blog error:", error);
  }, [error]);

  const getErrorMessage = (error: Error) => {
    if (error.message.includes("fetch")) {
      return "Failed to load blog posts. Please check your internet connection.";
    }
    if (error.message.includes("404") || error.message.includes("not found")) {
      return "The blog posts could not be found. They may have been moved or deleted.";
    }
    if (error.message.includes("timeout")) {
      return "The request timed out while loading blog posts. Please try again.";
    }
    if (
      error.message.includes("network") ||
      error.message.includes("ECONNREFUSED")
    ) {
      return "Network error occurred while fetching blog posts.";
    }
    if (error.message.includes("parse") || error.message.includes("JSON")) {
      return "Error processing blog data. The content may be corrupted.";
    }

    return (
      error.message || "An unexpected error occurred while loading the blog."
    );
  };

  const getErrorSuggestions = (error: Error) => {
    if (error.message.includes("fetch") || error.message.includes("network")) {
      return [
        "Check your internet connection",
        "Try refreshing the page",
        "Wait a moment and try again",
      ];
    }
    if (error.message.includes("404")) {
      return [
        "Go back to the homepage",
        "Check if the URL is correct",
        "Browse other sections of the site",
      ];
    }

    return [
      "Try refreshing the page",
      "Clear your browser cache",
      "Contact support if the issue persists",
    ];
  };

  return (
    <main className="relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-20 text-center">
      <div className="mx-auto max-w-lg px-6">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-sm">
          <AlertTriangleIcon className="mx-auto mb-6 size-20 text-red-400/80" />

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Failed to Load Blog Posts
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-white/80">
            {getErrorMessage(error)}
          </p>

          {/* Suggestions */}
          <div className="mb-6 rounded-lg border border-white/10 bg-white/5 p-4 text-left">
            <h3 className="mb-3 text-sm font-medium text-white/80">
              Try these solutions:
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {getErrorSuggestions(error).map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-purple-300">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/20 px-6 py-3 font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/30"
            >
              <RefreshCwIcon className="mr-2 size-4" />
              Try Again
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex items-center justify-center rounded-lg bg-purple-500/80 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-purple-500"
            >
              <BookOpenIcon className="mr-2 size-4" />
              Browse Other Content
            </button>
          </div>

          <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
            <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-red-400"></div>
            Blog Loading Error
          </div>
        </div>
      </div>
    </main>
  );
}
