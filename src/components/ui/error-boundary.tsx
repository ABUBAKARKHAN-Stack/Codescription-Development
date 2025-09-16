"use client";

import {
  AlertTriangleIcon,
  RefreshCwIcon,
  WifiOffIcon,
  LoaderIcon,
  HomeIcon,
  FolderIcon,
  UserIcon,
  ServerIcon,
  ClockIcon,
  DatabaseIcon,
  FileTextIcon,
  BookOpenIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ContainerLayout } from "../layout";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
  homeUrl?: string;
  showHomeButton?: boolean;
  showRetryButton?: boolean;
  context?: "blogs" | "blog" | "general";
  className?: string;
}

export default function ErrorBoundary({
  error,
  reset,
  title,
  description,
  homeUrl = "/",
  showHomeButton = true,
  showRetryButton = true,
  context = "general",
  className,
}: ErrorBoundaryProps) {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    console.error(`${context} error:`, error);
  }, [error, context]);

  //* Smart icon selection based on error type and context
  const getErrorIcon = (error: Error) => {
    const errorMessage = error.message.toLowerCase();

    if (context === "blog" || context === "blogs") {
      if (errorMessage.includes("404") || errorMessage.includes("not found")) {
        return context === "blog" ? (
          <FileTextIcon className="size-10 text-red-400" />
        ) : (
          <BookOpenIcon className="size-10 text-red-400" />
        );
      }
    }

    //! Network/Connection errors
    if (
      errorMessage.includes("fetch") ||
      errorMessage.includes("network") ||
      errorMessage.includes("econnrefused") ||
      errorMessage.includes("connection")
    ) {
      return <WifiOffIcon className="size-10 text-red-400" />;
    }

    //! Not found errors
    if (errorMessage.includes("404") || errorMessage.includes("not found")) {
      return <FolderIcon className="size-10 text-red-400" />;
    }

    //! Timeout errors
    if (errorMessage.includes("timeout") || errorMessage.includes("time out")) {
      return <ClockIcon className="size-10 text-red-400" />;
    }

    //! Server errors
    if (
      errorMessage.includes("500") ||
      errorMessage.includes("server") ||
      errorMessage.includes("internal")
    ) {
      return <ServerIcon className="size-10 text-red-400" />;
    }

    //! Database/Parse errors
    if (
      errorMessage.includes("parse") ||
      errorMessage.includes("json") ||
      errorMessage.includes("syntax") ||
      errorMessage.includes("database")
    ) {
      return <DatabaseIcon className="size-10 text-red-400" />;
    }

    //! Authentication/Authorization errors
    if (
      errorMessage.includes("auth") ||
      errorMessage.includes("unauthorized") ||
      errorMessage.includes("forbidden") ||
      errorMessage.includes("401") ||
      errorMessage.includes("403")
    ) {
      return <UserIcon className="size-10 text-red-400" />;
    }

    //! Default fallback icon
    return <AlertTriangleIcon className="size-10 text-red-400" />;
  };

  //* Dynamic error messages based on context (singular vs plural)
  const getContextualErrorMessage = (error: Error, context: string) => {
    const contextMessages: Record<string, Record<string, string>> = {
      blogs: {
        fetch:
          "Unable to load blog posts. Please check your internet connection.",
        404: "No blog posts were found. Our content might be temporarily unavailable.",
        timeout:
          "Our blog service is taking longer than usual to load all posts.",
        network: "We're having trouble connecting to our blog service.",
        parse: "There's an issue with the blog posts data format.",
        server: "Our blog server is experiencing some difficulties.",
        auth: "You don't have permission to view these blog posts.",
        default: "Something unexpected happened while loading the blog posts.",
      },
      blog: {
        fetch:
          "Unable to load this blog post. Please check your internet connection.",
        404: "This blog post seems to have wandered off or doesn't exist.",
        timeout: "This blog post is taking longer than usual to load.",
        network: "We're having trouble connecting to load this blog post.",
        parse: "There's an issue with this blog post's data format.",
        server: "Our server is having trouble retrieving this blog post.",
        auth: "You don't have permission to view this blog post.",
        default: "Something unexpected happened while loading this blog post.",
      },
      general: {
        fetch: "Unable to load content. Please check your connection.",
        404: "The content you're looking for was not found.",
        timeout: "The request is taking longer than expected.",
        network: "Network connection issue occurred.",
        parse: "Data appears to be corrupted.",
        server: "Server is experiencing difficulties.",
        auth: "You don't have permission to access this content.",
        default: "An unexpected error occurred.",
      },
    };

    const messages = contextMessages[context] || contextMessages.general;
    const errorMsg = error.message.toLowerCase();

    if (errorMsg.includes("fetch")) return messages.fetch;
    if (errorMsg.includes("404") || errorMsg.includes("not found"))
      return messages["404"];
    if (errorMsg.includes("timeout")) return messages.timeout;
    if (errorMsg.includes("network") || errorMsg.includes("econnrefused"))
      return messages.network;
    if (errorMsg.includes("parse") || errorMsg.includes("json"))
      return messages.parse;
    if (
      errorMsg.includes("500") ||
      errorMsg.includes("server") ||
      errorMsg.includes("internal")
    )
      return messages.server;
    if (
      errorMsg.includes("auth") ||
      errorMsg.includes("unauthorized") ||
      errorMsg.includes("403")
    )
      return messages.auth;

    return description || messages.default;
  };

  const getContextualSuggestions = (error: Error, context: string) => {
    const baseSuggestions = [
      "Check your internet connection",
      "Refresh the page to try again",
      "Clear your browser cache",
    ];

    const contextSuggestions: Record<string, string[]> = {
      blogs: [
        ...baseSuggestions,
        "Try browsing other sections of our site",
        "Check back later for new blog posts",
      ],
      blog: [
        ...baseSuggestions,
        "Return to all blog posts",
        "Try searching for similar content",
      ],
      general: [...baseSuggestions, "Contact support if issue persists"],
    };

    return contextSuggestions[context] || contextSuggestions.general;
  };

  const getIcon = () => {
    return getErrorIcon(error);
  };

  const getContextualTitle = () => {
    if (title) return title;

    const contextTitles: Record<string, string> = {
      blogs: "No Blog Posts Available",
      blog: "Blog Post Not Found",
      general: "Content Unavailable",
    };

    return contextTitles[context] || "Something Went Wrong";
  };

  const getStatusMessage = () => {
    const statusMessages: Record<string, string> = {
      blogs: "Blog Service Interrupted",
      blog: "Post Unavailable",
      general: "Service Interrupted",
    };

    return statusMessages[context] || "Service Interrupted";
  };

  const getHomeButtonText = () => {
    const buttonTexts: Record<string, { desktop: string; mobile: string }> = {
      blogs: { desktop: "Go Home", mobile: "Back to Home" },
      blog: { desktop: "View All Blogs", mobile: "All Blog Posts" },
      general: { desktop: "Go Home", mobile: "Back to Home" },
    };

    return buttonTexts[context] || buttonTexts.general;
  };

  const getHomeUrl = () => {
    if (homeUrl !== "/") return homeUrl;

    const urls: Record<string, string> = {
      blogs: "/",
      blog: "/blog",
      general: "/",
    };

    return urls[context] || "/";
  };

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.location.reload();
    } catch (err) {
      console.error("Retry failed:", err);
    } finally {
      setIsRetrying(false);
    }
  };

  const handleGoHome = async () => {
    setIsNavigating(true);
    try {
      router.push(getHomeUrl());
    } catch (err) {
      console.error("Navigation failed:", err);
      window.location.href = getHomeUrl();
    }
  };

  const homeButtonText = getHomeButtonText();

  return (
    <main
      className={cn(
        "relative flex h-full min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900",
        className,
      )}
    >
      <ContainerLayout>
        <div className="mx-auto w-full max-w-4xl">
          {/* Desktop Landscape Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 items-center gap-8">
              {/* Left Side - Icon and Title */}
              <div className="text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
                  {getIcon()}
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white">
                  {getContextualTitle()}
                </h2>
                <p className="text-lg text-white/70">
                  {getContextualErrorMessage(error, context)}
                </p>
              </div>

              {/* Right Side - Solutions and Actions */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center font-semibold text-white">
                  <AlertTriangleIcon className="mr-2 size-5 text-amber-400" />
                  Quick Solutions
                </h3>

                <ul className="mb-6 space-y-3">
                  {getContextualSuggestions(error, context).map(
                    (suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-center text-white/80"
                      >
                        <div className="bg-primary mr-3 h-1.5 w-1.5 rounded-full"></div>
                        {suggestion}
                      </li>
                    ),
                  )}
                </ul>

                <div className="flex gap-3">
                  {showRetryButton && (
                    <button
                      onClick={handleRetry}
                      disabled={isRetrying || isNavigating}
                      className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-medium text-white transition-all hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/5"
                    >
                      {isRetrying ? (
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                      ) : (
                        <RefreshCwIcon className="mr-2 size-4" />
                      )}
                      {isRetrying ? "Retrying..." : "Try Again"}
                    </button>
                  )}
                  {showHomeButton && (
                    <button
                      onClick={handleGoHome}
                      disabled={isRetrying || isNavigating}
                      className="bg-primary inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg px-4 py-3 font-medium text-white transition-all hover:bg-purple-700/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-purple-700/90"
                    >
                      {isNavigating ? (
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                      ) : context === "blog" ? (
                        <BookOpenIcon className="mr-2 size-4" />
                      ) : (
                        <HomeIcon className="mr-2 size-4" />
                      )}
                      {isNavigating ? "Navigating..." : homeButtonText.desktop}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Portrait Layout */}
          <div className="block text-center md:hidden">
            <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
                {getIcon()}
              </div>

              <h2 className="mb-4 text-2xl font-bold text-white">
                {getContextualTitle()}
              </h2>

              <p className="mb-6 text-white/70">
                {getContextualErrorMessage(error, context)}
              </p>

              <div className="mb-6 rounded-lg bg-white/5 p-4 text-left">
                <h3 className="mb-3 flex items-center font-medium text-white">
                  <AlertTriangleIcon className="mr-2 size-4 text-amber-400" />
                  Quick Solutions
                </h3>
                <ul className="space-y-2">
                  {getContextualSuggestions(error, context).map(
                    (suggestion, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-white/80"
                      >
                        <div className="mr-3 h-1 w-1 rounded-full bg-purple-400"></div>
                        {suggestion}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                {showRetryButton && (
                  <button
                    onClick={handleRetry}
                    disabled={isRetrying || isNavigating}
                    className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-medium text-white transition-all hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white/5"
                  >
                    {isRetrying ? (
                      <LoaderIcon className="mr-2 size-4 animate-spin" />
                    ) : (
                      <RefreshCwIcon className="mr-2 size-4" />
                    )}
                    {isRetrying ? "Retrying..." : "Try Again"}
                  </button>
                )}
                {showHomeButton && (
                  <button
                    onClick={handleGoHome}
                    disabled={isRetrying || isNavigating}
                    className="bg-primary inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-3 font-medium text-white transition-all hover:bg-purple-700/90 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-purple-700/90"
                  >
                    {isNavigating ? (
                      <LoaderIcon className="mr-2 size-4 animate-spin" />
                    ) : context === "blog" ? (
                      <BookOpenIcon className="mr-2 size-4" />
                    ) : (
                      <HomeIcon className="mr-2 size-4" />
                    )}
                    {isNavigating ? "Navigating..." : homeButtonText.mobile}
                  </button>
                )}
              </div>

              <div className="mt-4 inline-flex items-center rounded-full border border-red-400/20 bg-red-400/5 px-4 py-2 text-xs text-red-300">
                <div className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-red-400"></div>
                {getStatusMessage()}
              </div>
            </div>
          </div>

          {/* Development error details */}
          {process.env.NODE_ENV === "development" && (
            <details className="mx-auto mt-6 max-w-2xl rounded-lg border border-amber-400/20 bg-amber-400/5 p-4 backdrop-blur-sm">
              <summary className="cursor-pointer text-sm font-medium text-amber-300">
                Development Info
              </summary>
              <div className="mt-3 rounded bg-black/20 p-3">
                <pre className="overflow-auto font-mono text-xs text-amber-200/80">
                  {error.stack || error.message}
                </pre>
                {error.digest && (
                  <p className="mt-2 text-xs text-amber-300/60">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            </details>
          )}
        </div>
      </ContainerLayout>
    </main>
  );
}
