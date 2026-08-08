"use client";

import { useEffect } from "react";
import "./globals.css";

/**
 * Root-level boundary: catches errors thrown by the root layout itself, so it
 * has to render its own <html>/<body>. Fonts are not available here (the root
 * layout that defines them is what failed), so this stays deliberately plain.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-soft antialiased">
        <main className="flex min-h-screen items-center justify-center px-4 py-20">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold tracking-subtop text-primary">
              Titi Style
            </p>
            <h1 className="text-3xl font-semibold uppercase text-ink md:text-4xl">
              Something went wrong
            </h1>
            <p className="text-body">
              The site failed to load. Please refresh the page or try again in a
              moment.
            </p>
            {error.digest ? (
              <p className="text-xs text-muted">Reference: {error.digest}</p>
            ) : null}
            <button
              type="button"
              onClick={reset}
              className="mt-2 rounded-btn border border-primary bg-primary px-[35px] py-[14px] text-xs font-semibold tracking-btn text-white transition-colors hover:bg-primary-dark"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
