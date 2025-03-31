
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Github, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch the specific project from an API
    // Here we're simulating that with a timeout and hardcoded data
    const timeout = setTimeout(() => {
      const projectData = {
        id: Number(id),
        title: 'My Projects',
        subtitle: 'Join me in my project and learning journey',
        description: 'A collaborative journey into building a cutting-edge object detection system using AI models, with custom dataset training, model optimization, and deployment capabilities.',
        longDescription: `
          Join me in my project and learning journey as I develop ObjectDetectionX, an advanced real-time object detection system. Built on YOLOv5, this project explores custom dataset training, model optimization, and deployment across various platforms.
From data collection and annotation to model fine-tuning and inference speed optimization using TensorRT, every step is designed to enhance accuracy and efficiency. The system supports deployment on edge devices, cloud servers, and mobile applications, with an intuitive API for seamless integration.
This project is not just about building technology—it's a learning experience. Follow along as I share insights, challenges, and breakthroughs in computer vision!"
Would you like any further refinements? 🚀
        `,
        image: '/istockphoto-155598384-612x612.jpg',
        images: [
          '/180703-cervical-smear-hpv-infection-se-1158a.jpg',
          '/what-is-generative-adversarial-networks.jpg',
          '/360_F_1132382710_Pesfj8dAs7cLjdIFxk5nXcPr3P0a3lxA.jpg',
        ],
        technologies: ['PyTorch', 'OpenCV', 'YOLO', 'Docker', 'TensorRT', 'Python', 'Flask'],
        category: 'Computer Vision',
        github: 'https://github.com/AbhishekChavan1/',
        demo: 'https://github.com/AbhishekChavan1/',
        date: 'June 2023',
        features: [
          'Real-time detection with on standard hardware',
          'Custom dataset training pipeline with advanced augmentation',
          'Model optimization for edge deployment',
          'Comprehensive API for easy integration',
          'Detailed performance metrics and visualization',
        ],
        challenges: [
          'Optimizing model size while maintaining high accuracy',
          'Creating effective data augmentation for limited training data',
          'Reducing inference time for real-time applications',
          'Implementing efficient post-processing techniques',
        ],
        outcomes: [
          '5% improvement in detection of brain tumor accuracy compared to baseline.',
          '10% reduction in inference time through optimization.',
          'Successful deployment across diverse hardware configurations.',
          'Developed GAN which helps Doctors for creating artificial images of cancer.',
        ],
      };
      
      setProject(projectData);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timeout);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 flex justify-center items-center h-[80vh]">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-foreground/70">Loading project details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 px-4 text-center h-[80vh] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-foreground/70 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-xl mb-12">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2 inline-block">
                    {project.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                  <p className="text-foreground/70 text-lg mt-1">{project.subtitle}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171515] text-white font-medium transition-all hover:bg-[#171515]/90"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-8 text-foreground/70">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-secondary text-foreground/70 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg mb-6">{project.description}</p>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                {project.longDescription.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2.5"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((image: string, index: number) => (
                    <div key={index} className="rounded-lg overflow-hidden aspect-[4/3]">
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Outcomes & Impact</h2>
                <div className="bg-secondary/30 rounded-xl p-6">
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in working together?</h2>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
