
import { Briefcase, Calendar } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
  const titleAnimation = useIntersectionObserver();
  
  const experiences = [
    {
      title: 'ML Research Intern',
      company: 'Pimpri Chinchwad College of Engineering',
      period: 'June 2024 - July 2024',
      description: 'Designed and implemented recommender systems using collaborative filtering and deep learning approaches. Increased user engagement by 32% through personalized recommendations.',
      technologies: ['Scikit-learn', 'Pandas', 'PySpark', 'Keras', 'SQL'],
    },
    {
      title: 'AICTE AWS Virtual Intern',
      company: 'AICTE',
      period: 'Jan 2024 - March 2024',
      description: 'Conducted research on generative adversarial networks (GANs) for image synthesis. Published findings at a major AI conference.',
      technologies: ['TensorFlow', 'GANs', 'Python', 'CUDA', 'NumPy'],
    },
  ];

  // Create animation refs array for consistent hooks
  const expAnimationRefs = experiences.map(() => useIntersectionObserver({
    threshold: 0.1,
    animationClass: 'animate-fade-in',
  }));

  return (
    <section id="experience" className="section-container">
      <div className="animate-delayed" ref={titleAnimation.ref}>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
          Experience
        </span>
        <h2 className="section-heading">
          Professional Journey
        </h2>
      </div>
      
      <div className="mt-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item animate-delayed"
            ref={expAnimationRefs[index].ref}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <div className="flex items-center gap-4 text-foreground/70 mb-2">
                <div className="flex items-center gap-1">
                  <Briefcase size={14} />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-foreground/80 mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
