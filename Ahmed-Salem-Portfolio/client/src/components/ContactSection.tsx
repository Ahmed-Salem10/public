import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";

const socialLinks = [
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    handle: "ahmedwsalem01-create",
    href: "https://github.com/ahmedwsalem01-create",
    color: "text-foreground",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Ahmed Waled Salem",
    href: "https://www.linkedin.com/in/ahmedwaledsalem",
    color: "text-accent",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    handle: "ahmedwsalem01@gmail.com",
    href: "mailto:ahmedwsalem01@gmail.com",
    color: "text-primary",
  },
];

const infoItems = [
  { icon: MapPin, label: "Location", value: "Damietta, Egypt" },
  { icon: Clock, label: "Availability", value: "Open to opportunities" },
  { icon: Mail, label: "Email", value: "ahmedwsalem01@gmail.com" },
];

export default function ContactSection() {

  return (
    <section id="contact" className="dark py-24 bg-background relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 100% 50%, hsl(174 100% 42% / 0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
              Reach Out
            </Badge>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="contact-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-card-border bg-card">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-semibold text-foreground">Contact Info</h3>
                {infoItems.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-card-border bg-card">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                {socialLinks.map(({ id, icon: Icon, label, handle, href, color }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md border border-border/30 bg-muted/20 hover-elevate transition-all duration-200"
                    data-testid={`social-link-${id}`}
                  >
                    <Icon className={`w-4 h-4 ${color}`} />
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm text-foreground">{handle}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
