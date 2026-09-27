"use client";

import { useState, useMemo } from "react";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-batch";
import "prismjs/components/prism-groovy";

interface CodeBlockProps {
  filename?: string;
  language?: string;
  code: string;
}

export default function CodeBlock({ filename, language = "python", code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const highlightedCode = useMemo(() => {
    try {
      const lang = language.toLowerCase();
      const grammar = Prism.languages[lang] || Prism.languages.plain;
      if (grammar) {
        return Prism.highlight(code, grammar, lang);
      }
    } catch {
      // Fallback if grammar lookup fails
    }
    return code;
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="my-4 overflow-hidden rounded-[10px] border border-pebble/30 bg-[#0e0f0c] text-paper shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#163300] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#cb272f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#868685]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#9fe870]" />
          </div>
          {filename && (
            <span className="font-mono text-xs font-semibold text-lime-voltage tracking-wide ml-2">
              {filename}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {language && (
            <span className="text-[11px] uppercase tracking-wider text-pebble font-mono font-medium">
              {language}
            </span>
          )}
          <button
            onClick={handleCopy}
            type="button"
            className="inline-flex items-center gap-1.5 rounded-pill bg-white/10 px-2.5 py-1 text-xs font-medium text-paper transition hover:bg-lime-voltage hover:text-forest-ink"
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-lime-voltage" />
                <span className="text-lime-voltage">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono">
        <pre className="text-gray-200">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}
