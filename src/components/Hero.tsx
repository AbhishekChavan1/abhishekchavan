
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float animate-delay-300"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 animate-delayed animate-fade-in">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
              AI/ML Engineer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
              Building the future with <span className="text-primary">Artificial Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl">
              Transforming complex data into meaningful insights and innovative solutions through deep learning, computer vision, and natural language processing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:translate-y-[-2px] shadow-lg hover:shadow-primary/20"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80 hover:translate-y-[-2px]"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-delayed animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl mx-auto">
                <img
                  src="public\abhi.jpg"
                  alt="AI ML Engineer Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-lg animate-float">
                <div className="text-sm font-medium">ML Engineer</div>
                <div className="text-xs text-foreground/70">Deep Learning Specialist</div>
              </div>
              <div className="absolute -top-4 -left-4 glass rounded-xl p-4 shadow-lg animate-float animate-delay-400">
                <div className="text-sm font-medium">10+ Projects</div>
                <div className="text-xs text-foreground/70">Excellence in AI</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-foreground/50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
