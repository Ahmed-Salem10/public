import { Github, Linkedin, Mail, Brain } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark bg-muted/20 border-t border-border/40 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Brain className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="font-bold text-foreground text-sm">
              Ahmed<span className="text-primary">.</span>Salem
            </span>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Data & AI Engineer — Damietta, Egypt
            <span className="mx-2 text-border/60">|</span>
            &copy; {year} Ahmed Waled Salem
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border/30 text-muted-foreground hover-elevate transition-colors duration-200"
              data-testid="footer-github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md border border-border/30 text-muted-foreground hover-elevate transition-colors duration-200"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ahmed@example.com"
              className="p-2 rounded-md border border-border/30 text-muted-foreground hover-elevate transition-colors duration-200"
              data-testid="footer-email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
