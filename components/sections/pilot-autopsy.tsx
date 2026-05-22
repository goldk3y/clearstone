"use client";

import { Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { pilotAutopsy } from "@/content/home";
import { useState } from "react";

export function PilotAutopsy() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    project: "",
    builder: "",
    stalled: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    console.log("Pilot Autopsy form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="pilot-autopsy" container="narrow" padding="default" background="muted">
      <div className="text-center">
        <h2 className="text-h3 mb-4 text-foreground text-balance">
          {pilotAutopsy.headline}
        </h2>
        <p className="text-body-lg mb-4 text-pretty">
          {pilotAutopsy.description}
        </p>
        <p className="text-body mb-8 text-muted-foreground">
          {pilotAutopsy.note}
        </p>

        {!isFormOpen && !isSubmitted && (
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsFormOpen(true)}
            className="h-12 px-8"
          >
            {pilotAutopsy.cta}
          </Button>
        )}

        {isFormOpen && !isSubmitted && (
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg text-left">
            <div className="space-y-4">
              <div>
                <label htmlFor="company" className="text-label mb-2 block">
                  {pilotAutopsy.formFields.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-body focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-label mb-2 block">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-body focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="project" className="text-label mb-2 block">
                  {pilotAutopsy.formFields.project}
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={3}
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-body focus:border-brand focus:outline-none resize-none"
                />
              </div>

              <div>
                <label htmlFor="builder" className="text-label mb-2 block">
                  {pilotAutopsy.formFields.builder}
                </label>
                <input
                  type="text"
                  id="builder"
                  name="builder"
                  value={formData.builder}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-body focus:border-brand focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="stalled" className="text-label mb-2 block">
                  {pilotAutopsy.formFields.stalled}
                </label>
                <textarea
                  id="stalled"
                  name="stalled"
                  rows={3}
                  value={formData.stalled}
                  onChange={handleInputChange}
                  className="w-full border border-border bg-background px-4 py-3 text-body focus:border-brand focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Button type="submit" size="lg" className="h-12 px-8 bg-brand hover:bg-brand/90 text-brand-foreground">
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setIsFormOpen(false)}
                className="h-12 px-8"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}

        {isSubmitted && (
          <div className="mx-auto max-w-lg border border-brand/20 bg-brand/5 p-8">
            <p className="text-body-lg text-foreground">
              {pilotAutopsy.confirmation}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
