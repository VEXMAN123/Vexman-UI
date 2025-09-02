import { Hero } from "@/components/Hero";
import { ComponentShowcase } from "@/components/ComponentShowcase";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Installation } from "@/components/Installation";
import { CodeExample } from "@/components/CodeExample";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Installation />
      <ComponentShowcase />
      <FeatureGrid />
      <CodeExample />
    </div>
  );
};

export default Index;