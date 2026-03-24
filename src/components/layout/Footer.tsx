import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { contactLinks, profile } from "@/lib/data";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin
};

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="container">
        <div className="glass-panel flex flex-col gap-5 rounded-[2rem] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-medium text-foreground">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Crafted for international internship applications with modern UI, motion, and clean engineering.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Built with React, Tailwind CSS, Framer Motion, and a lot of attention to detail <Heart className="inline h-3.5 w-3.5 text-rose-400" />
        </p>
      </div>
    </footer>
  );
}
