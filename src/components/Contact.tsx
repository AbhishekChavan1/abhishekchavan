
import { useState } from 'react';
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Contact = () => {
  const titleAnimation = useIntersectionObserver();
  const formAnimation = useIntersectionObserver({ animationClass: 'animate-slide-in-right' });
  const infoAnimation = useIntersectionObserver({ animationClass: 'animate-slide-in-left' });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false,
    loading: false,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitted: true,
        loading: false,
      });
      
      // Reset form state after showing success message
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="animate-delayed" ref={titleAnimation.ref}>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
          Contact
        </span>
        <h2 className="section-heading">
          Get In Touch
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="animate-delayed" ref={infoAnimation.ref}>
          <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
          <p className="text-foreground/70 mb-8">
            Have a project in mind or interested in collaborating? I'd love to hear from you. Reach out through the form or using the contact details below.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a href="mailto:abhishekmc13051@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  abhishekmc13051@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 7066800013
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-foreground/70">
                  Pune, India
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-delayed" ref={formAnimation.ref}>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            {formState.submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-foreground/70">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formState.loading}
                  className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    formState.loading
                      ? 'bg-primary/70 text-white cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-primary/90 transition-colors'
                  }`}
                >
                  {formState.loading ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
