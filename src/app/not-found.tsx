import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for is not available.",
};

export default function NotFound() {
  return (
    <main className="bg-soft py-20">
      <div className="container-site">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary shadow-sm">
            <SearchX className="h-9 w-9" strokeWidth={1.6} />
          </span>
          <p className="text-xs font-semibold tracking-subtop text-primary">
            Error 404
          </p>
          <h1 className="text-3xl uppercase md:text-4xl">Page not found</h1>
          <p className="text-body">
            The page you are looking for has moved or no longer exists. Browse
            the collection instead — your next watch is in there somewhere.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="/shop">Browse watches</Button>
            <Button href="/" variant="outline">
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
