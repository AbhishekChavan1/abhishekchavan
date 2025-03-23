
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Machine Learning', value: 'ml' },
    { name: 'Deep Learning', value: 'dl' },
    { name: 'Computer Vision', value: 'cv' },
    { name: 'NLP', value: 'nlp' },
    { name: 'MLOps', value: 'mlops' },
  ];

  const posts = [
    {
      id: 1,
      title: 'Understanding Transformer Architecture for NLP Tasks',
      excerpt: 'An in-depth exploration of transformer models and their applications in natural language processing.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, ipsum eget aliquet ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
      image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      date: 'May 20, 2023',
      category: 'nlp',
      tags: ['transformers', 'bert', 'nlp', 'deep-learning'],
    },
    {
      id: 2,
      title: 'Best Practices for Training Computer Vision Models',
      excerpt: 'Tips and techniques for efficient training of state-of-the-art computer vision models.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, ipsum eget aliquet ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
      image: 'https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      date: 'April 15, 2023',
      category: 'cv',
      tags: ['computer-vision', 'cnn', 'training', 'deep-learning'],
    },
    {
      id: 3,
      title: 'Deploying ML Models with Kubernetes and TensorFlow Serving',
      excerpt: 'A comprehensive guide to scaling and deploying machine learning models in production.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, ipsum eget aliquet ultricies, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      date: 'March 8, 2023',
      category: 'mlops',
      tags: ['kubernetes', 'deployment', 'tensorflow', 'production'],
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Insights, tutorials, and case studies on artificial intelligence, machine learning, and deep learning.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" size={18} />
                </div>
                
                <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 sm:pb-0">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category.value)}
                      className={`whitespace-nowrap px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeCategory === category.value
                          ? 'bg-primary text-white'
                          : 'bg-secondary text-foreground/70 hover:bg-secondary/70'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="rounded-xl overflow-hidden bg-card border border-border shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          
                          <div className="md:w-2/3 p-6 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                  {categories.find(c => c.value === post.category)?.name || post.category}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-foreground/70">
                                  <Calendar size={12} />
                                  <span>{post.date}</span>
                                </div>
                              </div>
                              
                              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                              </h2>
                              
                              <p className="text-foreground/70 text-sm mb-4">
                                {post.excerpt}
                              </p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/70">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              
                              <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <ChevronRight size={16} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">No articles found</h3>
                    <p className="text-foreground/70">
                      Try changing your search query or category filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="bg-card rounded-xl border border-border p-6 shadow-md sticky top-32">
                <h3 className="text-xl font-bold mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(posts.flatMap(post => post.tags))).slice(0, 12).map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                
                <div className="border-t border-border my-6"></div>
                
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map(post => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-foreground/70 mt-1">
                            <Calendar size={10} />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
