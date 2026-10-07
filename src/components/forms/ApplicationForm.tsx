"use client";

import { useId, useState, type FormEvent } from "react";
import { Field, Honeypot, controlClass } from "./Field";
import { useFormPost } from "./useFormPost";
import { JOB_LOCATIONS, JOB_PRACTICES } from "@/data/pages";

/**
 * General application. The CV itself is captured for the user but not sent
 * through the JSON endpoint — file handling lands with the backend in
 * Days 3–5, so the form records the filename and asks for a link meanwhile.
 */
export default function ApplicationForm() {
  const id = useId();
  const [fileName, setFileName] = useState("");
  const { state, submit, reset } = useFormPost();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await submit({
      kind: "application",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      location: String(data.get("location") ?? ""),
      practice: String(data.get("practice") ?? ""),
      experience: String(data.get("experience") ?? ""),
      cvLink: String(data.get("cvLink") ?? ""),
      cvFileName: fileName,
      message: String(data.get("message") ?? ""),
      company_website: String(data.get("company_website") ?? ""),
    });
  }

  if (state.status === "sent") {
    return (
      <div role="status" className="border border-line bg-white p-10">
        <p className="display display-sm text-burgundy-deep">Thank you — your profile has been received.</p>
        <p className="body-copy mt-4 max-w-xl text-[0.9375rem]">
          Applications are reviewed in accordance with the firm&rsquo;s recruitment processes and role requirements.
          Submission does not create any entitlement to employment, engagement or an interview.
        </p>
        <button
          type="button"
          onClick={reset}
          className="eyebrow mt-8 border border-burgundy/25 px-6 py-3 text-burgundy transition-colors duration-500 hover:bg-burgundy hover:text-ivory"
        >
          Submit Another Profile
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

        <Field label="Email" htmlFor={`${id}-email`} required>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={controlClass()} />
        </Field>

        <Field label="Phone" htmlFor={`${id}-phone`}>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={controlClass()} />
        </Field>

        <Field label="Preferred Location" htmlFor={`${id}-loc`}>
          <select id={`${id}-loc`} name="location" defaultValue="" className={controlClass()}>
            <option value="">Select a location</option>
            {JOB_LOCATIONS.filter((l) => l !== "All Locations").map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Practice / Function" htmlFor={`${id}-practice`}>
          <select id={`${id}-practice`} name="practice" defaultValue="" className={controlClass()}>
            <option value="">Select a practice or function</option>
            {JOB_PRACTICES.filter((p) => p !== "All Practices").map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Years of Experience" htmlFor={`${id}-exp`}>
          <input id={`${id}-exp`} name="experience" type="text" placeholder="e.g. 4 years PQE" className={controlClass()} />
        </Field>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field label="CV" htmlFor={`${id}-cv`} hint="PDF or Word. Secure upload arrives with the application portal.">
          <div className="flex items-center gap-4">
            <label
              htmlFor={`${id}-cv`}
              className="eyebrow cursor-pointer border border-line bg-white px-5 py-3.5 text-[0.5625rem] text-burgundy transition-colors duration-400 hover:border-gold"
            >
              Choose File
            </label>
            <input
              id={`${id}-cv`}
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            />
            <span className="truncate text-[0.8125rem] text-charcoal-muted">{fileName || "No file selected"}</span>
          </div>
        </Field>

        <Field label="Link to CV or Profile" htmlFor={`${id}-cvlink`} hint="A LinkedIn or document link we can open.">
          <input id={`${id}-cvlink`} name="cvLink" type="url" placeholder="https://" className={controlClass()} />
        </Field>
      </div>

      <div className="mt-6">
        <Field label="A Note About Your Practice" htmlFor={`${id}-msg`}>
          <textarea id={`${id}-msg`} name="message" rows={5} className={`${controlClass()} resize-y`} />
        </Field>
      </div>

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
        {state.status === "sending" ? "Submitting…" : "Submit Your Profile"}
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
          <path d="M0 4h14M10.5 .8 14 4l-3.5 3.2" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      <p className="mt-7 max-w-2xl text-[0.75rem] leading-relaxed text-charcoal-muted">
        Submission of a CV does not create any entitlement to employment, engagement or an interview. Applications are
        reviewed subject to the firm&rsquo;s requirements and applicable professional and regulatory considerations.
      </p>
    </form>
  );
}
