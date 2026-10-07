"use client";

import { useId, type FormEvent } from "react";
import { Honeypot, controlClass } from "./Field";
import { useFormPost } from "./useFormPost";

export default function NewsletterForm({ list = "insights" }: { list?: "insights" | "careers" }) {
  const id = useId();
  const { state, submit } = useFormPost();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await submit({
      kind: "newsletter",
      list,
      email: String(data.get("email") ?? ""),
      company_website: String(data.get("company_website") ?? ""),
    });
  }

  if (state.status === "sent") {
    return (
      <p role="status" className="border border-gold/30 px-5 py-4 text-[0.9375rem] text-gold-light">
        Thank you — you are subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative" noValidate>
      <Honeypot />
      <label htmlFor={`${id}-email`} className="eyebrow text-[0.5625rem] text-gold/75">
        Your Email Address
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@organisation.com"
          className={controlClass("dark")}
        />
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="eyebrow shrink-0 border border-gold/40 px-7 py-3.5 text-gold-light transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-burgundy-deep disabled:opacity-50"
        >
          {state.status === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>

      {state.status === "error" && (
        <p role="alert" className="mt-3 text-[0.8125rem] text-gold-light">
          {state.message}
        </p>
      )}

      <p className="mt-4 text-[0.75rem] leading-relaxed text-gold-light/50">
        We respect your inbox. Communications are limited to relevant professional and editorial content.
      </p>
    </form>
  );
}
