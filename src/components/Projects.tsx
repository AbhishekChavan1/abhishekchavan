
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const titleAnimation = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Computer Vision', value: 'cv' },
    { name: 'NLP', value: 'nlp' },
    { name: 'Deep Learning', value: 'dl' },
    { name: 'MLOps', value: 'mlops' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'SmartIndiaHackathon',
      description: 'A real-time plant disease detection system using cnn with custom dataset training pipeline.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['PyTorch', 'OpenCV', 'YOLO', 'Docker'],
      category: 'cv',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/sih2.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/sih2.ipynb',
    },
    {
      id: 2,
      title: 'NLP Document Analyzer',
      description: 'An intelligent document analysis system for extracting key information using transformer models.',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['BERT', 'Hugging Face', 'spaCy', 'FastAPI'],
      category: 'nlp',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'A scalable stock price prediction model for deploying, monitoring in production.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Kubernetes', 'TensorFlow Serving', 'Prometheus', 'Grafana'],
      category: 'mlops',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/rsistocks.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/rsistocks.ipynb',
    },
    {
      id: 4,
      title: 'Image Generation with GANs',
      description: 'A creative image generation system using StyleGAN2 with custom transfer learning capabilities.',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      technologies: ['TensorFlow', 'GANs', 'CUDA', 'Python'],
      category: 'dl',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/ganFinal.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/ganFinal.ipynb',
    },
    {
      id: 5,
      title: 'SpamHam classification',
      description: 'A robust SpamHam classification for real-time sentiment analysis on email data with multilingual support.',
      image: 'https://images.unsplash.com/photo-1546775392-5e80d1313db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['RoBERTa', 'FastAPI', 'Redis', 'AWS Lambda'],
      category: 'nlp',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/SpamHam.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/SpamHam.ipynb',
    },
    {
      id: 6,
      title: 'ML Continuous Training Pipeline',
      description: 'An automated pipeline for continuous training and evaluation of ML models with drift detection.',
      image: 'https://images.unsplash.com/photo-1603969409447-ba86143a03f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Airflow', 'MLflow', 'Evidently AI', 'Python'],
      category: 'mlops',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="animate-delayed" ref={titleAnimation.ref}>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
          Projects
        </span>
        <h2 className="section-heading">
          Featured ML Projects
        </h2>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter.value
                ? 'bg-primary text-white'
                : 'bg-secondary text-foreground/70 hover:bg-secondary/70'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          const cardAnimation = useIntersectionObserver({
            threshold: 0.1,
            animationClass: 'animate-scale-in',
          });
          
          return (
            <div 
              key={project.id} 
              className="animate-delayed rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              ref={cardAnimation.ref}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {filters.find(f => f.value === project.category)?.name}
                  </span>
                </div>
                
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/70">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                  
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium transition-all hover:bg-primary hover:text-white"
        >
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
