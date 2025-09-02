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
            Next-Gen UI with
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
            <Button
              variant="outline"
              size="lg"
              className="group"
              asChild
            >
              <a href="/docs">
                <Code className="mr-2 h-4 w-4" />
                Documentation
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="group shadow-lg border-2 border-blue-700 bg-blue-900 text-white font-bold rounded-xl px-8 py-3 hover:bg-blue-800 hover:border-blue-800 transition-all duration-200 flex items-center gap-2"
              asChild
            >
              <a href="/demos">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
                View Live Demos
              </a>
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