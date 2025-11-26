import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Skill Swap Hub",
      category: "Web Platform",
      description: "A collaborative platform for sharing and exchanging skills",
      fullDescription: "Skill Swap Hub is an innovative web platform that connects people who want to learn new skills with those who can teach them. The platform features user profiles, skill matching algorithms, scheduling system, and real-time messaging. Built with React, Node.js, and MongoDB, it provides a seamless experience for users to exchange knowledge and grow together.",
      image: "/skillswap.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    },
     {
      id: 2,
      title: "Online Job Application",
      category: "Web Platform",
      description: "A platform for applying for jobs online based on our interests.",
      fullDescription: "It serves as a centralized, efficient platform that seamlessly connects job seekers with potential employers. It streamlines the entire recruitment process, from posting job openings to managing applications, leveraging technology to facilitate a faster and more effective match between talent and opportunities.",
      image: "/onlinejob.jpg",
      technologies: ["HTML","CSS","Javascript"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              A selection of my recent work showcasing various skills and technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden card-hover bg-card border-border/50 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-background font-body text-sm leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full font-body font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base font-body">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg"
                />

                <p className="text-lg font-body text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div>
                  <h4 className="font-display font-semibold text-lg mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-body font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
