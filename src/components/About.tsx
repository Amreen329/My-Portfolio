import { Code2, Palette, Rocket, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Building responsive web applications with modern technologies",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, user-centered interfaces with attention to detail",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and seamless user experiences",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Writing clean, maintainable code following best practices",
    },
  ];

  const professionalSkills = [
    { name: "Creativity", value: 90, color: "hsl(var(--secondary))" },
    { name: "Communication", value: 85, color: "hsl(var(--accent))" },
    { name: "Problem Solving", value: 63, color: "hsl(var(--primary))" },
    { name: "Team Work", value: 80, color: "hsl(142, 76%, 36%)" },
  ];


  return (
    <section id="about" className="py-20 md:py-32 section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Passionate about crafting exceptional digital experiences
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-20 blur-xl" />
                <img
                  src={profileImage}
                  alt="Amreen Fathima Profile"
                  className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-display font-bold">
                Hello! I'm Amreen Fathima
              </h3>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                I'm a Full Stack Developer passionate about creating innovative web solutions. 
                As a fresher in the field, I bring enthusiasm, dedication, and a strong foundation 
                in modern web technologies. I'm eager to contribute to meaningful projects and 
                continue learning and growing as a developer.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                I love solving complex problems with elegant code and building applications that 
                make a difference. My journey in web development has equipped me with a diverse 
                skill set, and I'm always excited to take on new challenges and expand my expertise.
              </p>
              
              <div className="pt-4">
                <h4 className="font-display font-semibold text-xl mb-4">Education</h4>
                <div className="space-y-2">
                  <p className="font-body text-muted-foreground">
                    <span className="font-medium text-foreground">Bachelor of Computer Science</span>
                    <br />
                    Narasaraopeta Engineering College • 2023 - 2027
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => window.open("/My-Portfolio/my-resume.pdf", "_blank")}
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-medium"
                >
                  Know More About Me
                </Button>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 card-hover bg-card border-border/50 animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <skill.icon className="w-12 h-12 text-secondary mb-4" />
                <h4 className="font-display font-semibold text-xl mb-2">
                  {skill.title}
                </h4>
                <p className="text-muted-foreground font-body">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <h3 className="text-3xl font-display font-bold mb-8 text-center">
              Technical Skills
            </h3>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Programming Languages */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-4">Programming Languages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">HTML</span>
                      <span className="text-secondary font-body">95%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[95%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">CSS</span>
                      <span className="text-secondary font-body">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[90%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">JavaScript</span>
                      <span className="text-secondary font-body">85%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[85%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">ReactJS</span>
                      <span className="text-secondary font-body">80%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[80%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">Angular</span>
                      <span className="text-secondary font-body">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[75%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">C</span>
                      <span className="text-secondary font-body">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[90%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">Python</span>
                      <span className="text-secondary font-body">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[75%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body font-medium">Java</span>
                      <span className="text-secondary font-body">70%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-secondary to-accent w-[70%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Frameworks & Technologies */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-4">Frameworks & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {["React", "Angular", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Git"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-card border border-border rounded-full font-body text-sm hover:border-secondary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xl font-display font-semibold mb-4">Development Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {["VS Code", "GitHub"].map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-card border border-border rounded-full font-body text-sm hover:border-secondary transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-3xl font-display font-bold mb-8 text-center">
              Professional Skills
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-48 h-48 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { value: skill.value },
                            { value: 100 - skill.value }
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          startAngle={90}
                          endAngle={-270}
                          dataKey="value"
                        >
                          <Cell fill={skill.color} />
                          <Cell fill="hsl(var(--muted))" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="text-center -mt-32">
                      <span className="text-3xl font-display font-bold">{skill.value}%</span>
                    </div>
                  </div>
                  <h4 className="font-display font-semibold text-lg text-center">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
