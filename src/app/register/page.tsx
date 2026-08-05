import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create a Titi Style account to shop faster.",
};

export default function RegisterPage() {
  return (
    <main className="bg-soft -mt-[60px] pb-[100px] pt-[108px] md:pt-[124px] lg:-mt-[72px] lg:pt-[136px]">
      <div className="container-site">
        <div className="mx-auto max-w-md rounded-sm border border-line bg-white p-8 shadow-sm">
          <Logo width={80} className="mx-auto mb-6" />
          <div className="mb-6 text-center">
            <p className="mb-2 text-xs font-semibold tracking-subtop text-primary">
              Account
            </p>
            <h1 className="text-3xl">Create your account</h1>
          </div>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}
