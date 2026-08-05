"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/components/auth/auth-field";
import { CheckIcon, LockIcon, MailIcon } from "@/components/ui/icons";

interface FormErrors {
  email?: string;
  password?: string;
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [done, setDone] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: FormErrors = {};
    if (!EMAIL_PATTERN.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setDone(true);
    }
  };

  if (done) {
    return (
      <div className="py-6 text-center">
        <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sale text-white">
          <CheckIcon className="h-10 w-10" />
        </span>
        <p className="mb-2 text-xs font-semibold tracking-subtop text-primary">
          Signed in
        </p>
        <h2 className="mb-3 text-3xl">Welcome back!</h2>
        <p className="mb-8 text-body">
          You are now signed in to your Titi Style account.
        </p>
        <Button href="/shop" className="w-full">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <AuthField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={setEmail}
        error={errors.email}
        Icon={MailIcon}
      />
      <AuthField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        value={password}
        onChange={setPassword}
        error={errors.password}
        Icon={LockIcon}
      />

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-body">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          Remember me
        </label>
        <a href="#" className="text-sm text-primary hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>

      <div className="flex items-center gap-3 text-xs text-body">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      <p className="text-center text-sm text-body">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary hover:underline"
        >
          Create one
        </Link>
      </p>
    </form>
  );
}
