import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 gradient-hero animate-gradient opacity-10"></div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-light border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Modern. Fast. Developer-First.</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
            This is a Beta-Version customized UI with
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">VexmanUI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Advanced React components engineered for performance and developer experience. 
            Zero-config setup, full TypeScript support, and modern design patterns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="default" size="lg" className="group shadow-primary">
              npm install vexman-ui
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Zero Dependencies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span>Tree Shakeable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>SSR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
