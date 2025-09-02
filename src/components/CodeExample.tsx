import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, Code, Package, Zap } from "lucide-react";

export const CodeExample = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const quickStart = `npm install vexman-ui

// Import and use immediately
import { Button, Card } from 'vexman-ui';

function App() {
  return (
    <Card>
      <Button>It just works</Button>
    </Card>
  );
}`;

  const productionCode = `import { 
  DataTable,
  CommandPalette, 
  Toast,
  useVexTheme 
} from 'vexman-ui';

function Dashboard() {
  const { theme, toggleTheme } = useVexTheme();
  
  return (
    <div className="dashboard">
      <CommandPalette />
      <DataTable 
        data={users}
        columns={columns}
        onRowSelect={handleSelect}
      />
      <Toast.Provider />
    </div>
  );
}`;

  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready for Production</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From prototype to enterprise. VexmanUI scales with your needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="quick" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Quick Start
              </TabsTrigger>
              <TabsTrigger value="production" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Production Ready
              </TabsTrigger>
            </TabsList>

            <TabsContent value="quick">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Get Started in 30 Seconds</span>
                    <Badge className="bg-primary text-primary-foreground">
                      Zero Config
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Install, import, build. No configuration files needed.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{quickStart}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4"
                      onClick={() => copyToClipboard(quickStart, 'quick')}
                    >
                      {copiedCode === 'quick' ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="production">
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise-Grade Components</CardTitle>
                  <CardDescription>
                    Advanced patterns for complex applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-6 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{productionCode}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4"
                      onClick={() => copyToClipboard(productionCode, 'production')}
                    >
                      {copiedCode === 'production' ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};