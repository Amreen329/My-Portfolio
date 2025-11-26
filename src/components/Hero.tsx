import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <p className="text-secondary font-body font-medium mb-4 text-lg tracking-wide">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-background mb-6 leading-tight">
              I'm Amreen Fathima
              <br />
              <span className="text-accent">Full Stack Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-background/80 font-body mb-12 max-w-2xl mx-auto leading-relaxed">
              Building beautiful digital experiences with clean code and innovative design. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-body font-medium text-lg px-8 py-6 group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/my resume.pdf';
                link.download = 'Amreen_Fathima_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 hover:text-background font-body font-medium text-lg px-8 py-6 backdrop-blur-sm"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
