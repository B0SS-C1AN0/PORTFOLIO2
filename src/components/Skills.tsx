import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Three.js", "WebGL"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "WebSocket"]
  },
  {
    category: "Cloud & DevOps",
    skills: []
  },
  {
    category: "Emerging Tech",
    skills: ["Machine Learning (Beginner)", "Blockchain (Interest)"]
  }
];


const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-px w-24 bg-gradient-primary mx-auto mb-8 glow-primary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">TECHNICAL</span> EXPERTISE
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastering the technologies that define the future of software development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="sci-fi-card p-6 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 font-mono">
                &gt; {category.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="
  px-3 py-1 text-sm
  bg-muted/20 
  text-muted-foreground 
  hover:bg-primary 
  hover:text-primary-foreground 
  hover:shadow-[0_0_10px_hsl(var(--primary-glow)/0.7)]
  transition-all duration-300 
  cursor-default
"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;