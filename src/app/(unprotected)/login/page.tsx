"use client";

import { useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const loginSchema = z.object({
  username: z.string().min(1, "نام کاربری را وارد کنید."),
  password: z
    .string()
    .min(1, "رمز عبور را وارد کنید.")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد."),
});

export type LoginValues = z.infer<typeof loginSchema>;

const glassInput =
  "h-11 rounded-xl border-white/25 bg-white/10 text-left text-white placeholder:text-right placeholder:text-white/45 " +
  "focus-visible:border-white/60 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-0";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const { isSubmitting, errors } = form.formState;

  async function onSubmit(values: LoginValues) {
    try {
      await login(values);

      router.replace("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
    }
  }

  return (
    <div className="flex-center bg-gradient min-h-dvh">
      <div className="w-200 h-120 bg-white/40  rounded-2xl p-8 flex flex-col justify-center">
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <FieldGroup className="gap-8 flex flex-col items-center max-w-lg mx-auto">
            {errors.root && (
              <Alert className="border-red-300/40 bg-red-500/20 text-red-50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-red-50">
                  {errors.root.message}
                </AlertDescription>
              </Alert>
            )}
            {/* ایمیل */}
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel htmlFor="login-email" className="text-white/90">
                    ایمیل
                  </FieldLabel>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
                    <Input
                      {...field}
                      id="login-email"
                      type="email"
                      dir="ltr"
                      autoComplete="email"
                      placeholder="admin@bedokado.com"
                      aria-invalid={fieldState.invalid}
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs text-red-100"
                    />
                  )}
                </Field>
              )}
            />
            {/* رمز عبور */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="login-password"
                    className="text-white/90"
                  >
                    رمز عبور
                  </FieldLabel>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
                    <Input
                      {...field}
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      dir="ltr"
                      autoComplete="current-password"
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid}
                      className={` px-10`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs text-red-100"
                    />
                  )}
                </Field>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              variant={"gradient"}
              className={"w-50"}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  در حال ورود…
                </>
              ) : (
                "ورود"
              )}
            </Button>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
