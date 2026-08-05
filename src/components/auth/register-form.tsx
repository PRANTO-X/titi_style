"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/components/auth/auth-field";
import { CheckIcon, LockIcon, MailIcon, PhoneIcon, UserIcon } from "@/components/ui/icons";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirm?: string;
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [done, setDone] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: FormErrors = {};
    if (name.trim().length < 2) {
      next.name = "Enter your full name.";
    }
    if (!EMAIL_PATTERN.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (phone.trim().length < 11) {
      next.phone = "Enter a valid phone number.";
    }
    if (password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }
    if (confirm !== password) {
      next.confirm = "Passwords do not match.";
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
          Account created
        </p>
        <h2 className="mb-3 text-3xl">You&apos;re in!</h2>
        <p className="mb-8 text-body">
          Your account has been created. Sign in to start shopping.
        </p>
        <Button href="/login" className="w-full">
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <AuthField
        label="Full Name"
        name="name"
        autoComplete="name"
        placeholder="Your full name"
        value={name}
        onChange={setName}
        error={errors.name}
        Icon={UserIcon}
      />
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
        label="Phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="01XXXXXXXXX"
        value={phone}
        onChange={setPhone}
        error={errors.phone}
        Icon={PhoneIcon}
      />
      <AuthField
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="Minimum 6 characters"
        value={password}
        onChange={setPassword}
        error={errors.password}
        Icon={LockIcon}
      />
      <AuthField
        label="Confirm Password"
        name="confirm"
        type="password"
        autoComplete="new-password"
        placeholder="Repeat your password"
        value={confirm}
        onChange={setConfirm}
        error={errors.confirm}
        Icon={LockIcon}
      />

      <Button type="submit" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-body">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
