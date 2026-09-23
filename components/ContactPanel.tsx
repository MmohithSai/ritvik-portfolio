"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import { ArrowDownLeft } from "./icons";
import { links, person, services, web3formsKey } from "@/content/site";
import "./ContactPanel.css";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  min?: number;
  options?: string[];
  textarea?: boolean;
};

const FIELDS: Field[] = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { name: "age", label: "Age", type: "number", required: true, min: 10 },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "WhatsApp / phone", type: "tel", required: true, autoComplete: "tel" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "City, country" },
  { name: "experience", label: "Experience level", required: true, options: ["Beginner", "Intermediate", "Advanced"] },
  { name: "frequency", label: "Training frequency", required: true, options: ["0–1× per week", "2–3× per week", "4–5× per week", "6+× per week"] },
  { name: "pull_ups", label: "Current pull-ups", type: "number", required: true, min: 0, placeholder: "Max strict reps" },
  { name: "push_ups", label: "Push-ups", type: "number", required: true, min: 0, placeholder: "Max strict reps" },
  { name: "dips", label: "Dips", type: "number", required: true, min: 0, placeholder: "Max strict reps" },
  { name: "current_skills", label: "Current skills", type: "text", placeholder: "e.g. L-sit, wall handstand" },
  { name: "goals", label: "Goals", required: true, textarea: true, placeholder: "What do you want to achieve?" },
  { name: "coaching_preference", label: "Coaching preference", required: true, options: [...services.map((s) => s.title), "Not sure yet"] },
  { name: "training_history", label: "Training history", textarea: true, placeholder: "Sports, gym, injuries…" },
  { name: "message", label: "Message", textarea: true, placeholder: "Anything else?" },
];

type Status = "idle" | "sending" | "sent" | "error";

const STATUS_TEXT: Record<Status, string> = {
  idle: "Free and non-binding",
  sending: "Sending…",
  sent: "Thanks — your application is in. I’ll get back to you soon.",
  error: "Something went wrong. Please try again or message me on WhatsApp.",
};

export default function ContactPanel() {
  const [valid, setValid] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    if (web3formsKey.startsWith("[")) {
      console.error("Web3Forms access key missing: set web3formsKey in content/site.ts");
      setStatus("error");
      return;
    }
    data.append("access_key", web3formsKey);
    data.append("subject", `Coaching application from ${data.get("name")}`);
    data.append("from_name", "Coaching website");
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setValid(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact section section--light">
      <div className="contact__col">
        <h2 className="contact__head h-row"><ArrowDownLeft className="contact__arrow" />Chat</h2>
        <span className="rule" />
        <div className="contact__call">
          <p className="body">Questions first? Message me directly.</p>
          <div className="contact__chat">
            <Button href={links.whatsapp} variant="dark" primary avatar={person.avatar} external>WhatsApp</Button>
            <Button href={links.instagram} variant="outline" external>Instagram</Button>
          </div>
        </div>
      </div>
      <div className="contact__col">
        <h2 className="contact__head h-row"><ArrowDownLeft className="contact__arrow" />Application</h2>
        <span className="rule" />
        <form className="contact__form" onSubmit={onSubmit} onInput={(e) => setValid(e.currentTarget.checkValidity())}>
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" hidden />
          {FIELDS.map((f) => {
            const props = {
              className: "body contact__input",
              name: f.name,
              required: f.required,
              placeholder: f.placeholder ?? f.label,
            };
            return (
              <label key={f.name} className="contact__field">
                <span className="body">{f.label}{f.required && "*"}</span>
                {f.options ? (
                  <select {...props} defaultValue="">
                    <option value="" disabled>Select…</option>
                    {f.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : f.textarea ? (
                  <textarea {...props} rows={3} />
                ) : (
                  <input {...props} type={f.type} autoComplete={f.autoComplete} min={f.min} inputMode={f.type === "number" ? "numeric" : undefined} />
                )}
              </label>
            );
          })}
          <div className="contact__submit">
            <button type="submit" className="btn btn--dark contact__send" aria-disabled={!valid || status === "sending"} disabled={status === "sending"}>
              <span className="btn__label">Send application</span>
            </button>
            <p className="text-small" role="status">{STATUS_TEXT[status]}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
