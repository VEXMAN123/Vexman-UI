import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Accessibility, 
  Palette, 
  Code2, 
  Zap, 
  Shield, 
  Smartphone,
  FileCode,
  Users,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Zero Config Setup",
    description: "One command installation. No complex configuration files or build setup required.",
    badge: "npm install",
    color: "bg-primary"
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description: "Built with TypeScript from ground up. Full type safety and IntelliSense support.",
    badge: "TypeScript",
    color: "bg-success"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Touch gestures, responsive layouts, and mobile-first design principles.",
    badge: "Mobile",
    color: "bg-accent"
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Production-tested at scale. Used by companies handling millions of users.",
    badge: "Enterprise",
    color: "bg-warning"
  },
  {
    icon: Palette,
    title: "Design System",
    description: "Comprehensive tokens and variables. Consistent theming across all components.",
    badge: "Theming",
    color: "bg-primary"
  },
  {
    icon: Accessibility,
    title: "Accessibility Built-in",
    description: "ARIA labels, keyboard navigation, and screen reader support by default.",
    badge: "A11y",
    color: "bg-success"
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why VexmanUI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineered for modern web development. High-performance components that scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="interactive-card border-border/50 hover:border-primary/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${feature.color}/10`}>
                    <feature.icon className={`h-5 w-5 ${feature.color.replace('bg-', 'text-')}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};