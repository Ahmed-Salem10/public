import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github, ExternalLink, BarChart2, MessageSquare, Globe } from "lucide-react";

const projects = [
  {
    id: "smart-text-analyzer",
    icon: MessageSquare,
    title: "SMART TEXT ANALYZER",
    description:
      "Developed a NLP model to automatically analyze and categorize customer feedback or social media comments. Helps businesses understand customer sentiment and improve service quality with actionable insights.",
    tags: ["Python", "NLP", "Scikit-learn", "Text Analysis", "Sentiment Analysis"],
    github: "https://github.com/ahmedwsalem01-create",
    demo: null,
    featured: true,
    accentColor: "accent",
    metrics: [
      { label: "Model Accuracy", value: "88%+" },
      { label: "Languages", value: "EN/AR" },
    ],
  },
  {
    id: "smart-analytics",
    icon: BarChart2,
    title: "SMART ANALYTICS",
    description:
      "A machine learning system that analyzes historical data to predict future trends and user behavior. Provides businesses with actionable insights to optimize their operations and make data-driven decisions.",
    tags: ["Python", "Machine Learning", "Predictive Analytics", "TensorFlow", "Data Science"],
    github: "https://github.com/ahmedwsalem01-create",
    demo: null,
    featured: true,
    accentColor: "primary",
    metrics: [
      { label: "Prediction Accuracy", value: "92%+" },
      { label: "Processing Speed", value: "<100ms" },
    ],
  },
  {
    id: "automated-pipelines",
    icon: Globe,
    title: "AUTOMATED DATA PIPELINES",
    description:
      "Designed and implemented an end-to-end ETL pipeline to clean and process large datasets automatically. Reduces manual work by 70% through intelligent data validation, transformation, and loading workflows.",
    tags: ["Python", "SQL", "ETL", "Data Engineering", "Automation"],
    github: "https://github.com/ahmedwsalem01-create",
    demo: null,
    featured: true,
    accentColor: "accent",
    metrics: [
      { label: "Data Throughput", value: "1M+ rows" },
      { label: "Automation Rate", value: "70%" },
    ],
  },
];

const accentConfig = {
  primary: {
    badge: "border-primary/30 text-primary",
    icon: "text-primary",
    iconBg: "bg-primary/10 border-primary/20",
    glow: "hsl(174 100% 42% / 0.08)",
    border: "hsl(174 100% 42% / 0.15)",
    metric: "text-primary",
  },
  accent: {
    badge: "border-accent/30 text-accent",
    icon: "text-accent",
    iconBg: "bg-accent/10 border-accent/20",
    glow: "hsl(196 100% 48% / 0.08)",
    border: "hsl(196 100% 48% / 0.15)",
    metric: "text-accent",
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="dark py-24 bg-background relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(174 100% 42% / 0.05) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
              Portfolio
            </Badge>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="projects-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real-world AI and data engineering projects that solve complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const cfg = accentConfig[project.accentColor as keyof typeof accentConfig];
            return (
              <Card
                key={project.id}
                className="border-card-border bg-card flex flex-col hover-elevate transition-all duration-300 group"
                style={{
                  boxShadow: `0 0 0 1px ${cfg.border}, 0 0 24px ${cfg.glow}`,
                }}
                data-testid={`project-card-${project.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center border ${cfg.iconBg}`}>
                      <Icon className={`w-5 h-5 ${cfg.icon}`} />
                    </div>
                    {project.featured && (
                      <Badge variant="outline" className={`text-xs ${cfg.badge}`}>
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground text-base leading-snug group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-2 rounded-md bg-muted/50 border border-border/30"
                        data-testid={`metric-${project.id}-${m.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      >
                        <div className={`text-lg font-bold ${cfg.metric}`}>{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2"
                      asChild
                      data-testid={`btn-github-${project.id}`}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 gap-2"
                        asChild
                        data-testid={`btn-demo-${project.id}`}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild data-testid="btn-more-projects">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2 flex items-center">
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
