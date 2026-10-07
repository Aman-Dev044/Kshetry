"use client";

import { useState } from "react";

export type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error"; message: string };

/** Shared submit handling for the site's three forms. */
export function useFormPost() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function submit(payload: Record<string, string>) {
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setState({ status: "error", message: data.error ?? "Something went wrong. Please try again." });
        return false;
      }
      setState({ status: "sent" });
      return true;
    } catch {
      setState({ status: "error", message: "Network error. Please check your connection and try again." });
      return false;
    }
  }

  return { state, submit, reset: () => setState({ status: "idle" }) };
}
