import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code2, BrainCircuit, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    icon: Code2,
    title: "Languages & Libraries",
    color: "text-primary",
    borderColor: "border-primary/20",
    glowColor: "hsl(174 100% 42% / 0.08)",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 82 },
    ],
  },
  {
    id: "ai-ml",
    icon: BrainCircuit,
    title: "AI / ML / DL",
    color: "text-accent",
    borderColor: "border-accent/20",
    glowColor: "hsl(196 100% 48% / 0.08)",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 83 },
      { name: "NLP", level: 85 },
      { name: "Scikit-learn", level: 84 },
      { name: "TensorFlow & Keras", level: 82 },
    ],
  },
  {
    id: "data",
    icon: Server,
    title: "Data Engineering",
    color: "text-primary",
    borderColor: "border-primary/20",
    glowColor: "hsl(174 100% 42% / 0.08)",
    skills: [
      { name: "Data Pipelines", level: 84 },
      { name: "Data Modeling", level: 82 },
      { name: "ETL/ELT", level: 80 },
    ],
  },
  {
    id: "cloud",
    icon: Wrench,
    title: "Cloud & Tools",
    color: "text-accent",
    borderColor: "border-accent/20",
    glowColor: "hsl(196 100% 48% / 0.08)",
    skills: [
      { name: "Azure / AWS / GCP", level: 75 },
      { name: "Git & GitHub", level: 88 },
      { name: "Computer Vision", level: 78 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center gap-3 group" data-testid={`skill-${name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm text-foreground/90 truncate">{name}</span>
          <span className="text-xs text-muted-foreground ml-2 tabular-nums">{level}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${level}%`,
              background: "linear-gradient(90deg, hsl(174 100% 42%), hsl(196 100% 48%))",
              boxShadow: "0 0 6px hsl(174 100% 42% / 0.5)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="dark py-24 bg-background relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, hsl(196 100% 48% / 0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
              Expertise
            </Badge>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="skills-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A comprehensive toolkit for building intelligent data systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card
                key={cat.id}
                className="border-card-border bg-card hover-elevate transition-all duration-300"
                style={{
                  boxShadow: `0 0 0 1px ${cat.borderColor.replace("border-", "").replace("/20", "")}20, 0 0 20px ${cat.glowColor}`,
                }}
                data-testid={`skills-card-${cat.id}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-md flex items-center justify-center"
                      style={{ background: cat.glowColor, border: `1px solid ${cat.glowColor}` }}
                    >
                      <Icon className={`w-4 h-4 ${cat.color}`} />
                    </div>
                    <h3 className={`font-semibold text-base ${cat.color}`}>{cat.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-md border border-border/40 bg-card/30 backdrop-blur-sm">
          <p className="text-center text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Jupyter Notebook", "Matplotlib", "Seaborn", "BeautifulSoup", "Requests", "OpenCV", "Transformers", "HuggingFace", "LangChain", "REST APIs", "JSON", "CSV Processing"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
