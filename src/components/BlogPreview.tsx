
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const BlogPreview = () => {
  const titleAnimation = useIntersectionObserver();

  const posts = [
    {
      id: 1,
      title: 'Building and Training a GAN from Scratch',
      excerpt: 'An in-depth exploration of gan models and their development with pytorch.',
      image: '/what-is-generative-adversarial-networks.jpg',
      link: 'https://medium.com/@abhishekchavan2714/building-and-training-a-gan-from-scratch-d7d78f07e61b',
      date: 'March 31, 2025',
      category: 'Deeplearning',
    },
    {
      id: 2,
      title: 'Your Comprehensive Roadmap to Mastering AI: From Fundamentals to Generative Models',
      excerpt: 'Tips and techniques for learning Ai and ML.',
      image: '/AI-image-3.png',
      link: 'https://medium.com/@abhishekchavan2714/your-comprehensive-roadmap-to-mastering-ai-from-fundamentals-to-generative-models-17d756f61b1e',
      date: 'March 31, 2025',
      category: 'Ai',
    },
    {
      id: 3,
      title: 'Developing CNN Models for Classification with TensorFlow',
      excerpt: 'A comprehensive guide to scaling and developing deep learning models.',
      image: '/gr1_lrg.jpg',
      link: 'https://medium.com/@abhishekchavan2714/multi-grade-brain-tumor-classification-2cfe2994c682',
      date: 'March 31, 2025',
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

              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={16} />
              </a>
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
