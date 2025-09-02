import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Package, Download, Zap } from "lucide-react";

export const Installation = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const installCommands = {
  npm: "npm install vexman-ui",
  yarn: "yarn add vexman-ui", 
  pnpm: "pnpm add vexman-ui",
  bun: "bun add vexman-ui"
  };

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Started in Seconds</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One command to install. Zero configuration required. Start building immediately.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Installation
              </CardTitle>
              <CardDescription>
                Choose your preferred package manager
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="yarn">yarn</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                  <TabsTrigger value="bun">bun</TabsTrigger>
                </TabsList>
                
                {Object.entries(installCommands).map(([manager, command]) => (
                  <TabsContent key={manager} value={manager}>
                    <div className="flex items-center gap-2 bg-muted rounded-lg p-4 font-mono">
                      <code className="flex-1 text-sm">{command}</code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(command, manager)}
                        className="h-8 w-8 p-0"
                      >
                        {copiedCommand === manager ? (
                          <Check className="h-4 w-4 text-success" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">1. Install</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add VexmanUI to your project with your favorite package manager
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Package className="h-6 w-6 text-success" />
                </div>
                <CardTitle className="text-lg">2. Import</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Import components directly - tree-shaking included by default
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">3. Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start building with production-ready components immediately
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary-light border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Quick Start Example</h3>
                  <div className="bg-background/50 rounded-lg p-4 font-mono text-sm mb-4">
                    <div className="text-muted-foreground mb-2">// App.tsx</div>
                    <div className="text-accent">import</div> {`{ Button, Card } `}<div className="text-accent">from</div> <div className="text-success">'vexman-ui'</div>
                    <br />
                    <br />
                    <div className="text-accent">export default function</div> <div className="text-warning">App</div>() {`{`}
                    <br />
                    {"  "}<div className="text-accent">return</div> {`<Button>Get Started</Button>`}
                    <br />
                    {`}`}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Zero Config
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TypeScript Ready
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};