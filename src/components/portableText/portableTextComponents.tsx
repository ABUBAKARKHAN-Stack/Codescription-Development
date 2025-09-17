import { urlFor } from "@/sanity/lib/image";
import { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CopyButton from "../ui/copy-button";
import { cn } from "@/lib/utils";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="xsm:text-4xl mt-12 mb-8 text-3xl leading-tight font-bold text-white md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="xsm:text-3xl relative mt-10 mb-6 text-2xl font-semibold text-white md:text-4xl">
        <span className="via-primary/60 absolute top-0 -left-4 h-full w-0.5 rounded-full bg-gradient-to-b from-transparent to-transparent"></span>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="xsm:text-2xl mt-8 mb-5 text-xl font-semibold text-neutral-100 md:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="xsm:text-xl mt-6 mb-4 text-lg font-semibold text-purple-300 md:text-2xl">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="xsm:text-lg mt-6 mb-4 text-base font-semibold text-purple-300 md:text-xl">
        {children}
      </h5>
    ),

    normal: ({ children }: any) => (
      <p className="mb-6 text-base leading-relaxed font-light text-neutral-200 md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-purple-500 bg-purple-900/20 py-4 pr-4 pl-6 text-base text-purple-200 italic backdrop-blur-sm md:text-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-neutral-50">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="text-neutral-200 italic">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="font-medium text-purple-400 underline decoration-purple-500/50 decoration-2 transition-all duration-300 hover:text-purple-500 hover:decoration-purple-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => {
      return (
        <code className="rounded-lg border border-purple-500/30 bg-gray-800/80 px-3 py-1 font-mono text-sm text-purple-200 md:text-base">
          {children}
        </code>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-6 list-inside list-disc space-y-3 text-base text-neutral-200 md:list-outside md:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-6 list-inside list-decimal space-y-3 text-base text-neutral-200 md:list-outside md:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="relative my-6 w-full max-w-2xl overflow-hidden rounded-lg">
          <Image
            src={urlFor(value).width(800).quality(80).url()}
            alt={value.alt || "Blog image"}
            width={800}
            height={450}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
            loading="lazy"
          />
        </div>
      );
    },
    code: ({ value }) => {
      const { language, filename, code } = value;

      return (
        <div className="my-8 w-full max-w-3xl overflow-hidden rounded-lg border border-white/10 shadow-xl">
          {/* Filename header */}
          <div
            className={cn(
              "bg-white/15 px-4 py-2 text-sm font-medium text-white/90",
              "flex items-center",
              filename ? "justify-between" : "justify-end",
            )}
          >
            {filename && <span>{filename}</span>}
            <CopyButton code={code} />
          </div>

          {/* Code block */}
          <SyntaxHighlighter
            language={language || "javascript"}
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: "1rem 1.25rem",
              borderRadius: "0 0 .25rem .25rem",
              fontSize: "0.9rem",
              background: "rgba(24, 24, 38, 0.95)",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};
