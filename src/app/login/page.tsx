import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Titi Style account.",
};

export default function LoginPage() {
  return (
    <main className="bg-soft -mt-[60px] pb-[100px] pt-[108px] md:pt-[124px] lg:-mt-[72px] lg:pt-[136px]">
      <div className="container-site">
        <div className="mx-auto max-w-md rounded-sm border border-line bg-white p-8 shadow-sm">
          <Logo width={80} className="mx-auto mb-6" />
          <div className="mb-6 text-center">
            <p className="mb-2 text-xs font-semibold tracking-subtop text-primary">
              Account
            </p>
            <h1 className="text-3xl">Sign in to your account</h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
