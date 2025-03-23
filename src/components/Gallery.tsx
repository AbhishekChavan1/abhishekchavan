
import { useState } from 'react';
import { Image } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ImageModal from './ImageModal';

const Gallery = () => {
  const titleAnimation = useIntersectionObserver();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'TensorFlow Developer Certificate',
      description: 'Certification received for demonstrating proficiency in building models with TensorFlow',
      category: 'certificate'
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'AI Conference Presentation',
      description: 'Presenting research findings at the International AI Conference 2023',
      category: 'event'
    },
    {
      src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      title: 'Computer Vision Project Demo',
      description: 'Live demonstration of object detection system at tech meetup',
      category: 'project'
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Deep Learning Workshop',
      description: 'Leading a workshop on deep learning fundamentals for beginners',
      category: 'event'
    },
    {
      src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'AWS Machine Learning Specialty',
      description: 'Certification for machine learning expertise on AWS platform',
      category: 'certificate'
    },
    {
      src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'NLP Model Research',
      description: 'Working on cutting-edge NLP research with transformer architecture',
      category: 'project'
    },
  ];
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Certificates', value: 'certificate' },
    { name: 'Events', value: 'event' },
    { name: 'Projects', value: 'project' },
  ];
  
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);
    
  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Create an array of animation refs instead of creating them inside the map function
  const itemAnimationRefs = galleryItems.map(() => useIntersectionObserver({
    threshold: 0.1,
    animationClass: 'animate-scale-in',
  }));

  return (
    <section id="gallery" className="section-container">
      <div className="animate-delayed" ref={titleAnimation.ref}>
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4 inline-block">
          Gallery
        </span>
        <h2 className="section-heading">
          Certificates & Events
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          // Use the pre-created animation refs by finding the original index in galleryItems
          const originalIndex = galleryItems.findIndex(galleryItem => galleryItem.src === item.src);
          const imgAnimation = itemAnimationRefs[originalIndex];
          
          return (
            <div
              key={index}
              className="animate-delayed rounded-xl overflow-hidden cursor-pointer group relative bg-card shadow-lg"
              onClick={() => openModal(filteredItems.indexOf(item))}
              ref={imgAnimation.ref}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Image size={18} className="text-white" />
              </div>
            </div>
          );
        })}
      </div>
      
      <ImageModal
        images={filteredItems}
        currentIndex={activeImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Gallery;
