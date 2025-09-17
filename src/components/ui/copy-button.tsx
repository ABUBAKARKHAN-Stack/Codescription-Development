"use client";

import { errorToast } from "@/helpers/toasts.helper";
import { Copy, CopyCheck } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      errorToast("Failed to copy code");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      onClick={handleCopy}
      className="ml-4 flex cursor-pointer items-center gap-1 text-xs text-white transition-colors hover:text-white/80"
    >
      {copied ? <CopyCheck size={15} /> : <Copy size={15} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;
