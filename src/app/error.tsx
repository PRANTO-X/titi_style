"use client";

import { useEffect } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
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
    <main className="bg-soft py-20">
      <div className="container-site">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-error/10 text-error">
            <TriangleAlert className="h-9 w-9" strokeWidth={1.6} />
          </span>
          <p className="text-xs font-semibold tracking-subtop text-primary">
            Something went wrong
          </p>
          <h1 className="text-3xl uppercase md:text-4xl">
            We hit a snag
          </h1>
          <p className="text-body">
            This page could not be loaded. Please try again — if it keeps
            happening, give us a call and we&apos;ll sort it out.
          </p>
          {error.digest ? (
            <p className="font-ui text-xs text-muted">
              Reference: {error.digest}
            </p>
          ) : null}
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button type="button" onClick={reset}>
              <RotateCcw className="h-4 w-4" strokeWidth={1.8} />
              Try again
            </Button>
            <Button href="/" variant="outline">
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
