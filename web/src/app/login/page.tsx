import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginBackButton } from "@/components/auth/LoginBackButton";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Log in to your Food Allergy Certified account to manage your center's certification, staff progress, and directory listing.",
};

export default function LoginPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-brand-sky/50 px-6 py-16">
      <LoginBackButton />
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
          <div className="flex justify-center">
            <Logo width={120} priority />
          </div>

          <h1 className="mt-8 text-center font-serif text-[30px] font-bold text-brand-teal-dark sm:text-[34px]">
            Welcome back
          </h1>
          <p className="mt-2 text-center text-ink/70">
            Log in to manage your center&rsquo;s certification.
          </p>

          <div className="mt-8">
            <LoginForm />
          </div>
        </div>

        <p className="mt-6 text-center text-ink/80">
          New to Food Allergy Certified?{" "}
          <Link
            href="/certification"
            className="font-semibold text-brand-teal underline underline-offset-4 hover:text-brand-teal-dark"
          >
            Get your center certified
          </Link>
        </p>
      </div>
    </section>
  );
}
