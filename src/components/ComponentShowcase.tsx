import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Heart, Star, Download, Play, Pause, Volume2 } from "lucide-react";

export const ComponentShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [progress, setProgress] = useState(75);

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Live Component Demos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive components ready for production. Copy-paste and customize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Buttons Showcase */}
          <Card className="interactive-card animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Buttons
              </CardTitle>
              <CardDescription>Various button styles and states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="destructive" size="sm">Destructive</Button>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Elements */}
          <Card className="interactive-card animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Form Elements
              </CardTitle>
              <CardDescription>Input fields and controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your email..." />
              <div className="flex items-center justify-between">
                <span className="text-sm">Enable notifications</span>
                <Switch />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Volume</span>
                  <span>{sliderValue[0]}%</span>
                </div>
                <Slider
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Media Player */}
          <Card className="interactive-card animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                Media Player
              </CardTitle>
              <CardDescription>Interactive media controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button variant="ghost" size="icon">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badges & Tags */}
          <Card className="interactive-card animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Badges & Tags
              </CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Error</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-success text-success-foreground">
                  <Star className="mr-1 h-3 w-3" />
                  Featured
                </Badge>
                <Badge className="bg-warning text-warning-foreground">New</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Progress & Loading */}
          <Card className="interactive-card animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Progress
              </CardTitle>
              <CardDescription>Progress indicators and loading states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Upload Progress</span>
                  <span>75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Download</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Card Layouts */}
          <Card className="interactive-card animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                Card Layouts
              </CardTitle>
              <CardDescription>Flexible content containers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Card className="p-3 bg-primary-light border-primary/20">
                  <p className="text-sm text-primary font-medium">Premium Feature</p>
                  <p className="text-xs text-primary/70">Available in Pro plan</p>
                </Card>
                <Card className="p-3 bg-surface border-border">
                  <p className="text-sm font-medium">Standard Card</p>
                  <p className="text-xs text-muted-foreground">Basic information display</p>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};