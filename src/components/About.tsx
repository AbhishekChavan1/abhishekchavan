
import { Award, Cpu, Brain, Code, Database, Server } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const titleAnimation = useIntersectionObserver({ animationClass: 'animate-fade-in' });
  const descAnimation = useIntersectionObserver({ animationClass: 'animate-fade-in', threshold: 0.2 });
  const skillsAnimation = useIntersectionObserver({ animationClass: 'animate-slide-up', threshold: 0.2 });
  const certAnimation = useIntersectionObserver({ animationClass: 'animate-slide-up', threshold: 0.2 });
  
  const skills = [
    { name: 'Machine Learning', icon: Brain, description: 'Regression, Classification, Clustering, Dimensionality Reduction' },
    { name: 'Deep Learning', icon: Cpu, description: 'Neural Networks, CNN, RNN, Transformers, GANs' },
    { name: 'Computer Vision', icon: Code, description: 'Object Detection, Image Classification, Segmentation' },
    { name: 'Natural Language', icon: Database, description: 'Named Entity Recognition, Sentiment Analysis, Text Classification' },
    { name: 'MLOps', icon: Server, description: 'Model Deployment, Monitoring, CI/CD for ML' },
  ];
  
  const certifications = [
    { name: 'AWS Machine Learning Associate', issuer: 'Amazon Web Services', year: '2025' },
    { name: 'CS50 SQL', issuer: 'Harvard University', year: '2024' },
    { name: 'CS50 Python', issuer: 'Harvard University', year: '2023' },
    { name: 'Microsoft Azure Ai900', issuer: 'Microsoft', year: '2022' },
    { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2021' },    
  ];

  return (
    <section id="about" className="section-container">
      <div className="flex flex-col gap-16">
        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="animate-delayed" ref={titleAnimation.ref}>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
                About Me
              </span>
              <h2 className="section-heading">
                Passionate about AI & Machine Learning
              </h2>
            </div>
            
            <div className="animate-delayed" ref={descAnimation.ref}>
              <p className="text-lg text-foreground/80 mb-6">
                I'm an AI/ML Engineer with a strong background in developing intelligent systems that solve complex problems. My expertise spans deep learning, computer vision, natural language processing, and deploying machine learning models at scale.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                With a blend of theoretical knowledge and practical experience, I thrive in transforming business challenges into AI-powered solutions that deliver meaningful impact.
              </p>
              <p className="text-lg text-foreground/80">
                I'm constantly learning and staying up-to-date with the latest research advancements in artificial intelligence to build innovative applications that push the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          {/* Certifications Section - Now in the middle */}
          <div id="certifications" className="animate-delayed" ref={certAnimation.ref}>
            <h3 className="text-2xl font-bold mb-6">
              <span className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </span>
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-xl transition-all hover:bg-secondary/50 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-lg">{cert.name}</h4>
                    <p className="text-sm text-foreground/70">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Section - Now at the bottom */}
        <div className="animate-delayed" ref={skillsAnimation.ref}>
          <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1">
                <skill.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                <p className="text-sm text-foreground/70">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
