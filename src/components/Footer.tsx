
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/AbhishekChavan1/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishekchavan2714/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:abhishekmc13051@gmail.com', label: 'Email' },
  ];
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className="bg-foreground/5 pt-20 pb-6">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              <span className="text-primary">ML</span>Engineer
            </Link>
            <p className="text-foreground/70 mb-6">
              Transforming data into intelligent solutions with machine learning and deep learning expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background text-foreground/70 hover:text-primary hover:border-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-3 text-foreground/70">
              <p>Pune, India</p>
              <p>
                <a href="mailto:abhishekmc13051@gmail.com" className="hover:text-primary transition-colors">
                  abhishekmc13051@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +91 7066800013
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-foreground/60 text-sm">
          <p>© {currentYear} ML Engineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
