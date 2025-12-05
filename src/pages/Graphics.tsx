import Navigation from "@/components/Navigation";
import Graphics from "@/components/Graphics";

const GraphicsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="py-20 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Graphics</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Interactive canvas-based visualization
            </p>
          </div>

          {/* Graphics Display */}
          <Graphics variant="combined" />

          {/* Description */}
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-2">About this Graphics</h3>
            <p className="text-muted-foreground text-sm">
              Real-time canvas rendering featuring particles, waves, and floating orbs.
              Optimized for performance without heavy 3D library dependencies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsPage;
