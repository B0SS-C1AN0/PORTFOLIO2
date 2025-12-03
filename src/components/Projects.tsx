import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Navigation from "@/components/Navigation";

// 🔹 Sample project data
const projects = [
  {
    title: "PuzzleRush",
    description:
      "A high-performance, browser-based puzzle game built with TypeScript and modern web tooling; features responsive UI and optimized gameplay.",
    tech: ["TypeScript", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/PUZZLERUSH",
    demo: "#",
  },
  {
    title: "RAIDER",
    description:
      "A fast-paced multiplayer shooter built with real-time networking, weapon mechanics, and performance-optimized client logic.",
    tech: ["TypeScript", "Node.js", "WebSocket", "Three.js", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/RAIDER",
    demo: "#",
  },
  {
    title: "JWL",
    description:
      "A sleek web app showcasing modern UI/UX design and efficient front-end architecture, built with a focus on responsiveness and interactivity.",
    tech: ["JavaScript", "React", "CSS3", "HTML5", "Vite"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/JWL",
    demo: "#",
  },
  {
    title: "BL_AST",
    description:
      "An innovative visualization project exploring blast-wave simulations using WebGL and GPU acceleration.",
    tech: ["TypeScript", "WebGL", "Three.js", "GPU-compute", "Vite"],
    image: "/placeholder.svg",
    github: "https://github.com/B0SS-C1AN0/BL_AST",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <>
      {/* ✅ Navbar always visible */}
      <Navigation />

      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="h-px w-24 bg-gradient-primary mx-auto mb-8 glow-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">FEATURED</span> PROJECTS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that push the boundaries of web technology.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="sci-fi-card group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-muted text-primary border border-border rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary-glow text-primary-foreground hover-glow flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;