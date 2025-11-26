import { createServerFn } from "@tanstack/react-start";
import z from "zod";

import { getSupabaseServerClient } from "./supabase";

export const getUserFn = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);
  return data;
});

export const loginFn = createServerFn()
  .inputValidator(z.object({ email: z.email(), password: z.string() }))
  .handler(async ({ data: formInput }) => {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formInput.email,
      password: formInput.password,
    });
    if (error) throw new Error(error.message);
    return data;
  });

export const signUpFn = createServerFn()
  .inputValidator(z.object({ email: z.email(), password: z.string() }))
  .handler(async ({ data: formInput }) => {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.auth.signUp({
      email: formInput.email,
      password: formInput.password,
    });
    if (error) throw new Error(error.message);
    return data;
  });
