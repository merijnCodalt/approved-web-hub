const testimonials = [
  {
    quote: "This platform transformed how our engineering team ships products. We went from monthly releases to daily deployments.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
  },
  {
    quote: "The security features alone justified the switch. SOC 2 compliance out of the box saved us months of work.",
    author: "Marcus Rivera",
    role: "VP Engineering, DataSync",
  },
  {
    quote: "We scaled from 10K to 2M users without a single infrastructure change. The platform just handles it.",
    author: "Emily Nakamura",
    role: "Head of Product, ScaleUp",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Loved by <span className="text-gradient">industry leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-xl glass hover-lift"
            >
              <p className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
