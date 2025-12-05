import { useState } from "react";
import Graphics from "./Graphics";
import { Button } from "@/components/ui/button";
import { Zap, Waves, Hexagon, Sparkles } from "lucide-react";

const GraphicsDemo = () => {
  const [variant, setVariant] = useState<"particles" | "waves" | "orbs" | "combined">("combined");

  const demos = [
    {
      id: "particles",
      label: "Particles",
      icon: Sparkles,
      description: "Animated particle system with connections",
    },
    {
      id: "waves",
      label: "Waves",
      icon: Waves,
      description: "Smooth wave animation",
    },
    {
      id: "orbs",
      label: "Orbs",
      icon: Hexagon,
      description: "Floating orbs with glow effects",
    },
    {
      id: "combined",
      label: "Combined",
      icon: Zap,
      description: "All effects together",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Graphics</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Interactive canvas-based visualizations
          </p>
        </div>

        {/* Main Graphics Display */}
        <div className="mb-8">
          <Graphics variant={variant} />
        </div>

        {/* Demo Selector */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {demos.map((demo) => {
            const Icon = demo.icon;
            return (
              <Button
                key={demo.id}
                onClick={() => setVariant(demo.id as any)}
                variant={variant === demo.id ? "default" : "outline"}
                className="h-auto py-4 px-4 flex flex-col items-center justify-center gap-2 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
                <div className="text-center">
                  <div className="font-semibold text-sm">{demo.label}</div>
                  <div className="text-xs text-muted-foreground">{demo.description}</div>
                </div>
              </Button>
            );
          })}
        </div>

        {/* Description */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="font-semibold mb-2">About this Graphics Component</h3>
          <p className="text-muted-foreground text-sm">
            The Graphics component features real-time canvas rendering with multiple
            animation modes. It's optimized for performance and works without external
            3D libraries. Perfect for adding visual interest to your portfolio without
            heavy dependencies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicsDemo;
