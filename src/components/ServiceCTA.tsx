import React from 'react';
import { motion } from 'framer-motion';
import { useModalStore } from '../store/modalStore';

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title = "Ready to Get Started?",
  description = "Schedule a consultation to discuss your digital marketing needs.",
  buttonText = "Book Your Consultation"
}) => {
  const { setActiveModal } = useModalStore();

  const handleClick = () => {
    setActiveModal('onboarding');
  };

  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <button 
            onClick={handleClick}
            className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors"
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;