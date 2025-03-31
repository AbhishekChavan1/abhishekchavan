
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
      image: '/istockphoto-155598384-612x612.jpg',
      technologies: ['PyTorch', 'OpenCV', 'YOLO'],
      category: 'cv',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/sih2.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/sih2.ipynb',
    },
    {
      id: 2,
      title: 'Multigrade Brain Tumor Detection',
      description: 'An intelligent system to detect different grades of brain tumor using deeplearning.',
      image: '/images.jpeg',
      technologies: ['BERT', 'Hugging Face', 'CNN'],
      category: 'nlp',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/denseefficient.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/denseefficient.ipynb',
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'A scalable stock price prediction model for deploying, monitoring in production.',
      image: '/stock-market-cycles-historical-chart.png',
      technologies: ['Kubernetes', 'TensorFlow Serving', 'Prometheus'],
      category: 'mlops',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/rsistocks.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/rsistocks.ipynb',
    },
    {
      id: 4,
      title: 'Image Generation with GANs',
      description: 'A creative image generation system using StyleGAN2 with custom transfer learning capabilities.',
      image: '/180703-cervical-smear-hpv-infection-se-1158a.jpg',
      technologies: ['TensorFlow', 'GANs', 'CUDA', 'Python'],
      category: 'dl',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/ganFinal.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/ganFinal.ipynb',
    },
    {
      id: 5,
      title: 'SpamHam classification',
      description: 'A robust SpamHam classification for real-time sentiment analysis on email data with multilingual support.',
      image: '/360_F_1132382710_Pesfj8dAs7cLjdIFxk5nXcPr3P0a3lxA.jpg',
      technologies: ['RoBERTa', 'Pytorch', 'GPU', 'Numpy'],
      category: 'nlp',
      github: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/SpamHam.ipynb',
      demo: 'https://github.com/AbhishekChavan1/Myprojects/blob/main/mldl/SpamHam.ipynb',
    },
    {
      id: 6,
      title: 'Product Recommendation System',
      description: 'An automated pipeline for continuous training and evaluation of ML models with drift detection.',
      image: '/1631452281143.jpeg',
      technologies: ['Machine Learning', 'Sklearn', 'Pandas', 'Python'],
      category: 'mlops',
      github: 'https://github.com/AbhishekChavan1/Recommendation-System',
      demo: 'https://github.com/AbhishekChavan1/Recommendation-System',
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
          to="https://github.com/AbhishekChavan1/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium transition-all hover:bg-primary hover:text-white"
        ><a href= "https://github.com/AbhishekChavan1/" target="_blank">View All Projects</a>
           <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
