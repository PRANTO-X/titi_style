"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/ui/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <p className="flex items-center gap-2 text-sm text-ink">
        <CheckIcon className="h-5 w-5 text-primary" />
        Thank you! You are now subscribed.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="footer-email" className="sr-only">
        Your email
      </label>
      <input
        id="footer-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email"
        required
        className="h-[50px] w-full rounded-btn border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-body focus:border-primary"
      />
      <button
        type="submit"
        className="inline-flex h-[50px] shrink-0 items-center justify-center gap-2 rounded-btn border border-primary bg-primary px-6 text-xs font-semibold uppercase tracking-btn text-white transition-colors hover:bg-primary-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
