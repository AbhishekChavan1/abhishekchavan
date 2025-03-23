
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const BlogPreview = () => {
  const titleAnimation = useIntersectionObserver();
  
  const posts = [
    {
      id: 1,
      title: 'Understanding Transformer Architecture for NLP Tasks',
      excerpt: 'An in-depth exploration of transformer models and their applications in natural language processing.',
      image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'May 20, 2023',
      category: 'NLP',
    },
    {
      id: 2,
      title: 'Best Practices for Training Computer Vision Models',
      excerpt: 'Tips and techniques for efficient training of state-of-the-art computer vision models.',
      image: 'https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      date: 'April 15, 2023',
      category: 'Computer Vision',
    },
    {
      id: 3,
      title: 'Deploying ML Models with Kubernetes and TensorFlow Serving',
      excerpt: 'A comprehensive guide to scaling and deploying machine learning models in production.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      date: 'March 8, 2023',
      category: 'MLOps',
    },
  ];

  // Create animation refs array for consistent hooks
  const postAnimationRefs = posts.map(() => useIntersectionObserver({
    threshold: 0.1,
    animationClass: 'animate-fade-in',
  }));

  return (
    <section id="blog" className="section-container">
      <div className="animate-delayed" ref={titleAnimation.ref}>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
          Blog
        </span>
        <h2 className="section-heading">
          Latest Articles
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            className="animate-delayed rounded-xl overflow-hidden bg-card border border-border group shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            ref={postAnimationRefs[index].ref}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-foreground/70">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <Link
                to={`/blog/${post.id}`}
                className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium transition-all hover:bg-primary hover:text-white"
        >
          View All Articles <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
