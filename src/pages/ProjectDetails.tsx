
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
        title: 'ObjectDetectionX',
        subtitle: 'Real-time object detection with custom training pipeline',
        description: 'A comprehensive object detection system built with YOLOv5, featuring custom dataset training, model optimization, and deployment capabilities.',
        longDescription: `
          ObjectDetectionX is a state-of-the-art computer vision project that enables real-time object detection across various applications. The system is built on top of YOLOv5 architecture with significant customizations to improve accuracy and inference speed.
          
          The project includes a complete pipeline from data collection and annotation to model training, optimization, and deployment. Custom data augmentation techniques were implemented to enhance model generalization, while TensorRT was used for optimizing inference speed.
          
          The system can be deployed on various platforms including edge devices, cloud servers, and mobile applications. It features an intuitive API for seamless integration with existing applications.
        `,
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        images: [
          'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
          'https://images.unsplash.com/photo-1600695268275-1a6468700bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        ],
        technologies: ['PyTorch', 'OpenCV', 'YOLO', 'Docker', 'TensorRT', 'Python', 'Flask'],
        category: 'Computer Vision',
        github: 'https://github.com',
        demo: 'https://demo.com',
        date: 'June 2023',
        features: [
          'Real-time object detection with 30+ FPS on standard hardware',
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
          '25% improvement in detection accuracy compared to baseline',
          '40% reduction in inference time through optimization',
          'Successful deployment across diverse hardware configurations',
          'Support for 80+ object categories with high precision',
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
