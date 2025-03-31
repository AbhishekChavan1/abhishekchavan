
import { useRef } from 'react';
import { Github, Twitter, Linkedin, Bookmark,Mail, Globe, Award,FileText,GraduationCap } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Profiles = () => {
  const titleAnimation = useIntersectionObserver();
  
  const profiles = [
    {
      name: 'Resume',
      icon: FileText,
      username: 'View My CV',
      link: 'https://drive.google.com/file/d/1XvoSQyzm3Fn0tKaSsY51Q9XiN4GENILU/view?usp=sharing', // Replace with your actual resume link
      description: 'Download my detailed resume with full qualifications and experience',
    },
    {
      name: 'Certificates',
      icon: GraduationCap,
      username: 'View All Certificates',
      link: 'https://drive.google.com/drive/folders/16g_jN7OXRwFs_f6fkWEmhhiEPxDiWe-_?usp=sharing', // Replace with your certificates folder link
      description: 'See all my professional certifications and completed courses',
    },

    {
      name: 'GitHub',
      icon: Github,
      username: '@ai-engineer',
      link: 'https://github.com/AbhishekChavan1/',
      description: 'Check out my open-source contributions and project repositories',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      username: 'AI/ML Engineer',
      link: 'https://www.linkedin.com/in/abhishekchavan2714/',
      description: 'Connect with me professionally and view my work experience',
    },
    {
      name: 'Kaggle',
      icon: Award,
      username: 'Top 5% Kaggler',
      link: 'https://www.kaggle.com/a47abhishekchavan',
      description: 'View my competition entries and notebooks on machine learning',
    },
    {
      name: 'Google Cloud Skills',
      icon: GraduationCap,
      username: 'Google Cloud Badges',
      link: 'https://www.cloudskillsboost.google/public_profiles/36cf42b9-b3c3-43e1-bdbc-7e4e7d4db98f', // Replace with your certificates folder link
      description: 'See all my professional badges and completed courses from google cloud',
    },
    {
      name: 'Credly',
      icon: GraduationCap,
      username: 'View All Badges',
      link: 'https://www.credly.com/users/abhishek-chavan.2714', // Replace with your certificates folder link
      description: 'See all my professional Badges at Credly',
    },
    {
      name: 'Medium',
      icon: Bookmark,
      username: 'Blogger',
      link: 'https://medium.com/@abhishekchavan2714m',
      description: 'View and read my medium blogs about ai and ml.',
    },
    {
      name: 'Email',
      icon: Mail,
      username: 'abhishekmc13051@gmail.com',
      link: 'mailto:abhishekmc13051@gmail.com',
      description: 'Reach out directly via email for collaborations or questions',
    },
  ];

  // Create animation refs array for consistent hooks
  const profileAnimationRefs = profiles.map(() => useIntersectionObserver({
    threshold: 0.1,
    animationClass: 'animate-fade-in',
  }));

  return (
    <section id="profiles" className="section-container">
      <div className="animate-delayed" ref={titleAnimation.ref}>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
          Profiles
        </span>
        <h2 className="section-heading">
          Find Me Online
        </h2>
      </div>
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => {
          const animRef = profileAnimationRefs[index];
          return (
            <div 
              key={index} 
              className="animate-delayed" 
              ref={animRef.ref}
            >
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-6 border border-border bg-card shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col h-full block"
              >
                <div className="mb-4 flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <profile.icon size={24} />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/70">
                    {profile.username}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {profile.name}
                </h3>
                
                <p className="text-foreground/70 text-sm flex-grow">
                  {profile.description}
                </p>
                
                <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span>Visit</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Profiles;
