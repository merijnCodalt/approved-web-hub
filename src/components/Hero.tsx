import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-surface/50 text-sm text-muted-foreground">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Now available for enterprise teams</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Build the future
          <br />
          <span className="text-gradient">with confidence</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          The platform that empowers teams to ship products faster, scale effortlessly, 
          and deliver exceptional experiences — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 h-12">
            Get Started Free
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
            Book a Demo
          </Button>
        </div>

        {/* Trust bar */}
        <p className="mt-14 text-sm text-muted-foreground/60">
          Trusted by 2,000+ companies worldwide
        </p>
        <div className="mt-4 flex items-center justify-center gap-8 opacity-40">
          {["Acme Corp", "Globex", "Initech", "Umbrella", "Stark"].map((name) => (
            <span key={name} className="text-sm font-semibold tracking-wider text-foreground/50 uppercase">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
