import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/useLanguage";
import { getPortfolioData, getUiText } from "@/lib/i18n";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin
};

export function ContactSection() {
  const { language } = useLanguage();
  const { contactLinks } = getPortfolioData(language);
  const ui = getUiText(language);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${ui.inquiryFrom} ${form.name || ui.inquiryFallbackName}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message || ui.inquiryDefaultMessage}`
    );

    window.location.href = `mailto:tvquan2004@gmail.com?subject=${subject}&body=${body}`;
    setStatus(ui.formHintSent);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container">
        <SectionHeading
          eyebrow={ui.contactEyebrow}
          title={ui.contactTitle}
          description={ui.contactDescription}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap];
                return (
                  <Card key={link.label}>
                    <CardContent className="flex items-center justify-between gap-4 p-6">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.label}</p>
                          <p className="text-sm text-muted-foreground">{link.value}</p>
                        </div>
                      </div>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="rounded-full border border-border p-3 text-muted-foreground transition hover:text-foreground"
                        aria-label={`${ui.openLabelPrefix} ${link.label}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
              <Card className="border-primary/20 bg-primary/10">
                <CardContent className="p-6 text-sm leading-7 text-foreground">
                  {ui.contactCardNote}
                </CardContent>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        {ui.yourName}
                      </label>
                      <Input
                        id="name"
                        placeholder={ui.namePlaceholder}
                        value={form.name}
                        onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        {ui.email}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={ui.emailPlaceholder}
                        value={form.email}
                        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      {ui.message}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={ui.messagePlaceholder}
                      value={form.message}
                      onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" />
                      {ui.sendMessage}
                    </Button>
                    <p className="text-sm text-muted-foreground">{status || ui.formHintDefault}</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
