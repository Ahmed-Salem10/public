import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Sparkles, Database, BrainCircuit, Code2 } from "lucide-react";

const floatingItems = [
  { icon: BrainCircuit, label: "Machine Learning", x: "8%", y: "30%", delay: "0s" },
  { icon: Database, label: "Data Pipelines", x: "86%", y: "25%", delay: "0.5s" },
  { icon: Code2, label: "NLP", x: "88%", y: "65%", delay: "1s" },
  { icon: Sparkles, label: "Deep Learning", x: "4%", y: "68%", delay: "1.5s" },
];

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="dark relative min-h-screen flex items-center justify-center overflow-hidden bg-background grid-bg"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(174 100% 42% / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(174 100% 42% / 0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(196 100% 48% / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {floatingItems.map(({ icon: Icon, label, x, y, delay }) => (
        <div
          key={label}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-md border border-border/40 bg-card/50 backdrop-blur-sm text-xs text-muted-foreground"
          style={{
            left: x,
            top: y,
            animation: `float 4s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon className="w-3 h-3 text-primary" />
          {label}
        </div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 bg-primary/50" />
          <Badge variant="outline" className="border-primary/40 text-primary text-xs px-3" data-testid="badge-status">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 inline-block" style={{ animation: "pulse 2s infinite" }} />
            Available for opportunities
          </Badge>
          <div className="h-px w-12 bg-primary/50" />
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
          data-testid="hero-heading"
        >
          <span className="text-foreground">Ahmed Waled Salem</span>
          <br />
          <span className="gradient-text">Data & AI Engineer</span>
          <br />
          <span className="text-foreground/80 text-3xl sm:text-4xl lg:text-5xl">
            Mansoura University
          </span>
        </h1>

        <p
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          data-testid="hero-subheading"
        >
          Designing and implementing scalable{" "}
          <span className="text-primary font-medium">data pipelines</span> and{" "}
          <span className="text-accent font-medium">AI solutions</span> using Python, SQL, and cloud technologies. 
          Specializing in machine learning, deep learning, NLP, and providing complete solutions for complex projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button size="lg" onClick={scrollToProjects} data-testid="btn-view-projects">
            View My Work
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/ahmedwsalem01-create"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border/40 text-muted-foreground transition-colors duration-200 hover-elevate"
            data-testid="social-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/ahmedwaledsalem"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border/40 text-muted-foreground transition-colors duration-200 hover-elevate"
            data-testid="social-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        data-testid="scroll-down-btn"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ArrowDown className="w-5 h-5" />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
