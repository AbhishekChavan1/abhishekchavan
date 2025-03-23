
import { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface ImageModalProps {
  images: { src: string; title: string; description: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ images, currentIndex, isOpen, onClose }: ImageModalProps) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  
  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigateToImage((activeIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        navigateToImage((activeIndex - 1 + images.length) % images.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, images.length, onClose]);
  
  const navigateToImage = (index: number) => {
    setActiveIndex(index);
  };
  
  if (!isOpen) return null;
  
  const currentImage = images[activeIndex];
  
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="animate-scale-in max-w-7xl w-full max-h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="text-white">
            <h3 className="text-xl font-medium">{currentImage.title}</h3>
            <p className="text-white/70 text-sm">{currentImage.description}</p>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="relative overflow-hidden rounded-lg bg-black flex-1">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-h-[80vh] object-contain w-full"
          />
          
          <button
            onClick={() => navigateToImage((activeIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/70 hover:bg-black/70 hover:text-white transition-all"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button
            onClick={() => navigateToImage((activeIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white/70 hover:bg-black/70 hover:text-white transition-all"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
