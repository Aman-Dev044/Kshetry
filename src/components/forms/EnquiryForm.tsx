"use client";

import { useId, type FormEvent } from "react";
import { Field, Honeypot, controlClass } from "./Field";
import { useFormPost } from "./useFormPost";
import { CONTACT_DISCLAIMER, PRACTICE_OPTIONS } from "@/data/pages";
import { NETWORK } from "@/data/site";

export default function EnquiryForm() {
  const id = useId();
  const { state, submit, reset } = useFormPost();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await submit({
      kind: "enquiry",
      name: String(data.get("name") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      jurisdiction: String(data.get("jurisdiction") ?? ""),
      practice: String(data.get("practice") ?? ""),
      preferredContact: String(data.get("preferredContact") ?? ""),
      matter: String(data.get("matter") ?? ""),
      company_website: String(data.get("company_website") ?? ""),
    });
  }

  if (state.status === "sent") {
    return (
      <div role="status" className="border border-line bg-ivory p-10">
        <p className="display display-sm text-burgundy-deep">Thank you — your enquiry has been received.</p>
        <p className="body-copy mt-4 max-w-xl text-[0.9375rem]">
          A member of the appropriate practice will review your message and respond. Please note that submission does
          not create a lawyer-client relationship.
        </p>
        <button
          type="button"
          onClick={reset}
          className="eyebrow mt-8 border border-burgundy/25 px-6 py-3 text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-ivory"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative" noValidate>
      <Honeypot />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" htmlFor={`${id}-name`} required>
          <input id={`${id}-name`} name="name" type="text" required autoComplete="name" className={controlClass()} />
        </Field>

        <Field label="Organisation" htmlFor={`${id}-org`}>
          <input id={`${id}-org`} name="organisation" type="text" autoComplete="organization" className={controlClass()} />
        </Field>

        <Field label="Email" htmlFor={`${id}-email`} required>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={controlClass()} />
        </Field>

        <Field label="Phone" htmlFor={`${id}-phone`}>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={controlClass()} />
        </Field>

        <Field label="Country / Jurisdiction" htmlFor={`${id}-jur`}>
          <select id={`${id}-jur`} name="jurisdiction" defaultValue="" className={controlClass()}>
            <option value="">Select a jurisdiction</option>
            {NETWORK.map((node) => (
              <option key={node.id} value={node.country}>
                {node.country}
              </option>
            ))}
            <option value="Other">Other / International</option>
          </select>
        </Field>

        <Field label="Practice Area" htmlFor={`${id}-practice`}>
          <select id={`${id}-practice`} name="practice" defaultValue="" className={controlClass()}>
            <option value="">Select a practice area</option>
            {PRACTICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field
          label="Brief Description of Matter"
          htmlFor={`${id}-matter`}
          hint="Please share only what is necessary for an initial assessment."
        >
          <textarea id={`${id}-matter`} name="matter" rows={6} className={`${controlClass()} resize-y`} />
        </Field>
      </div>

      <fieldset className="mt-7">
        <legend className="eyebrow text-[0.5625rem] text-charcoal-muted">Preferred Contact Method</legend>
        <div className="mt-4 flex flex-wrap gap-5">
          {["Email", "Phone", "Meeting"].map((method, i) => (
            <label key={method} className="flex cursor-pointer items-center gap-2.5">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                defaultChecked={i === 0}
                className="h-3.5 w-3.5 accent-[#6f1028]"
              />
              <span className="text-[0.9375rem] text-charcoal/80">{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {state.status === "error" && (
        <p role="alert" className="mt-7 border-l-2 border-burgundy bg-ivory px-5 py-4 text-[0.875rem] text-burgundy">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={state.status === "sending"}
        className="eyebrow mt-9 inline-flex items-center gap-3 bg-burgundy px-9 py-4 text-ivory transition-colors duration-500 hover:bg-burgundy-deep disabled:opacity-50"
      >
        {state.status === "sending" ? "Submitting…" : "Submit Enquiry"}
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
          <path d="M0 4h14M10.5 .8 14 4l-3.5 3.2" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      <p className="mt-7 max-w-2xl text-[0.75rem] leading-relaxed text-charcoal-muted">{CONTACT_DISCLAIMER}</p>
    </form>
  );
}
