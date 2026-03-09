import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: "data-engineer-experience",
    role: "Data & AI Engineer",
    company: "Professional Work",
    type: "Experience",
    period: "2024 — Present",
    location: "Egypt",
    description:
      "Designing and implementing machine learning and deep learning models using Python and SQL to improve data analysis efficiency and predictive accuracy. Applied NLP techniques for intelligent insights from unstructured data.",
    highlights: [
      "Developed ML/DL models for classification and regression tasks",
      "Implemented NLP techniques for text preprocessing and sentiment analysis",
      "Built data pipelines and ETL workflows with Python and SQL",
      "Created data solutions for complex project requirements",
    ],
    tags: ["Python", "SQL", "ML/DL", "NLP", "Data Pipelines"],
    accentColor: "primary",
  },
  {
    id: "depi-data-engineer",
    role: "Data Engineer - DEPI",
    company: "Microsoft & Digital Egypt Pioneers",
    type: "Training",
    period: "11/2025 — 05/2026",
    location: "Egypt",
    description:
      "Comprehensive hands-on training in Python, SQL, and data engineering fundamentals through the Microsoft Data Engineer program. Focus on relational databases, data processing, and foundational engineering concepts.",
    highlights: [
      "Mastering Python for data processing and automation",
      "Deep learning of SQL and relational database design",
      "Understanding basic data engineering concepts and ETL patterns",
      "Hands-on projects with real-world data scenarios",
    ],
    tags: ["Python", "SQL", "Data Engineering", "DEPI", "Microsoft"],
    accentColor: "accent",
  },
  {
    id: "student-mansoura",
    role: "Engineering Student",
    company: "Mansoura University",
    type: "Academic",
    period: "2024 — Present",
    location: "Mansoura, Egypt",
    description:
      "Pursuing degree with excellent academic standing (GPA 4.0). Studying Data Structures, Databases, Machine Learning, Deep Learning, and NLP with focus on AI and data engineering applications.",
    highlights: [
      "Maintaining 4.0 GPA with strong performance in core courses",
      "Studying ML, DL, NLP, and data engineering fundamentals",
      "Building solid foundation in databases and data structures",
      "Relevant coursework: Programming, Discrete Math, Databases",
    ],
    tags: ["Education", "Machine Learning", "Deep Learning", "NLP", "Databases"],
    accentColor: "primary",
  },
];

const accentConfig = {
  primary: {
    dot: "bg-primary",
    line: "bg-primary/20",
    type: "border-primary/30 text-primary",
    highlight: "text-primary",
  },
  accent: {
    dot: "bg-accent",
    line: "bg-accent/20",
    type: "border-accent/30 text-accent",
    highlight: "text-accent",
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="dark py-24 bg-muted/20 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 50% at 0% 50%, hsl(174 100% 42% / 0.04) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
              Background
            </Badge>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="experience-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A track record of delivering impactful data and AI solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const cfg = accentConfig[exp.accentColor as keyof typeof accentConfig];
              return (
                <div key={exp.id} className="relative sm:pl-14" data-testid={`experience-${exp.id}`}>
                  <div
                    className={`absolute left-4 top-5 w-4 h-4 rounded-full border-2 border-background hidden sm:block ${cfg.dot}`}
                    style={{ boxShadow: `0 0 10px currentColor` }}
                  />

                  <Card
                    className="border-card-border bg-card hover-elevate transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-md bg-muted/60 border border-border/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Briefcase className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-base">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:text-right">
                          <Badge variant="outline" className={`text-xs ${cfg.type}`}>
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5 mb-4">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${cfg.dot}`} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
