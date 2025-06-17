import React, { useEffect, useRef, useState } from 'react';
import { Target, Heart, BookOpen } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children}: ModalProps){
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-modalIn"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary-600 transition-colors text-2xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modalIn {
          animation: modalIn 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openModal, setOpenModal] = useState<null | 'mission' | 'vision'>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-element">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn about our mission, vision, and the values that drive us forward.
          </p>
        </div>
        
        <div className="mt-20 mb-16 bg-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <svg
                  className="h-12 w-12 text-primary-300 mb-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 4 2 7.456 2 11.352v16.256c0 0.8 0.8 1.6 1.6 1.6h8c0.8 0 1.6-0.8 1.6-1.6v-8c0-0.8-0.8-1.6-1.6-1.6h-3.2v-0.8c0-1.6 1.6-3.2 3.2-3.2h1.6c0.8 0 1.6-0.8 1.6-1.6v-6.4c0-0.8-0.8-1.6-1.6-1.6h-1.6z M23.2 4c-4.8 0-7.2 3.456-7.2 7.352v16.256c0 0.8 0.8 1.6 1.6 1.6h8c0.8 0 1.6-0.8 1.6-1.6v-8c0-0.8-0.8-1.6-1.6-1.6h-3.2v-0.8c0-1.6 1.6-3.2 3.2-3.2h1.6c0.8 0 1.6-0.8 1.6-1.6v-6.4c0-0.8-0.8-1.6-1.6-1.6h-1.6z" />
                </svg>
                <p className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                  Maresa's statement here
                </p>
                <div>
                  <p className="text-white font-semibold">Maresa Castañeda</p>
                  <p className="text-primary-200">Industrial Engeineering, Class of 2026</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Statement from our president"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in-element">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                To empower Hispanic students for successful STEM careers by providing an inclusive environment for professional growth, innovation, and research that addresses real-world challenges.
              </p>
              <div className="flex justify-end">
                <button 
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center cursor-pointer hover:underline transition"
                  onClick={() => setOpenModal('mission')}
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="fade-in-element">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                To be innovators in the STEM community where Hispanic engineers and scientists lead with influence, solving complex problems and advancing global technological and scientific literacy.
              </p>
              <div className="flex justify-end">
                <button
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center cursor-pointer hover:underline transition"
                  onClick={() => setOpenModal('vision')}
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fade-in-element">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Core Values</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span>1</span>
                    </span>
                    Family
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-11">
                    We cultivate a welcoming and supportive community that values collaboration and growth.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span>2</span>
                    </span>
                    Service
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-11">
                    We are committed to serving society with integrity, empathy, and a dedication to solving real-world problems.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span>3</span>
                    </span>
                    Education
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-11">
                    We emphasize the importance of academic excellence and continuous learning, preparing students for successful careers in STEM fields.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span>4</span>
                    </span>
                    Resilience
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-11">
                    We empower our members to overcome challenges with optimism, creativity, and perseverance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={openModal === 'mission'} onClose={() => setOpenModal(null)}>
        <h2 className="text-xl font-bold mb-4">Our Mission</h2>
        <p>More details about the mission...</p>
      </Modal>
      <Modal isOpen={openModal === 'vision'} onClose={() => setOpenModal(null)}>
        <h2 className="text-xl font-bold mb-4">Our Vision</h2>
        <p>More details about the vision...</p>
      </Modal>
    </section>
  );
};

export default AboutSection;