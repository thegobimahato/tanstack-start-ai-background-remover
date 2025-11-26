"use client";

import { useRouter } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginFn } from "@/lib/auth";
import { cn } from "@/lib/utils";

type LoginFormProps = {
  switchToSignUp: () => void;
};

export function LoginForm({ switchToSignUp }: LoginFormProps) {
  const router = useRouter();

  return (
    <div className={cn("mx-auto flex max-w-xl flex-col gap-6 p-12")}>
      {/* whole-card animation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                await loginFn({
                  data: {
                    email: formData.get("email") as string,
                    password: formData.get("password") as string,
                  },
                });
                router.invalidate();
              }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </Field>
                <Field>
                  <Button type="submit">Login</Button>

                  <FieldDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <button onClick={switchToSignUp} className="underline">
                      Sign up
                    </button>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
