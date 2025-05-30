import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Zap } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: "Startup Acceleration",
      description: "From concept to pitch deck, MVP, legal structure, and fundraising prep.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg"
    },
    {
      title: "Brand Identity Development",
      description: "Logos, websites, growth positioning, social kits.",
      icon: <Target className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/9432946/pexels-photo-9432946.jpeg"
    },
    {
      title: "Product & Project Execution",
      description: "Workflow optimization, KPI tracking, delivery support.",
      icon: <CheckCircle className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/9870142/pexels-photo-9870142.jpeg"
    },
    {
      title: "Government Contract Support",
      description: "Project execution, compliance, stakeholder alignment.",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/7103104/pexels-photo-7103104.jpeg"
    },
    {
      title: "Public Figure Monetization",
      description: "Personal brand strategy, content playbooks, audience growth.",
      icon: <ArrowRight className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/7563690/pexels-photo-7563690.jpeg"
    }
  ];

  const differentiators = [
    {
      title: "Execution-Driven",
      description: "We don't just advise - we roll up our sleeves and deliver results alongside you."
    },
    {
      title: "Localized Expertise",
      description: "Deep understanding of the African business ecosystem with global standards."
    },
    {
      title: "Full-Stack Consulting",
      description: "End-to-end support from strategy to implementation and measurement."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/4427814/pexels-photo-4427814.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            We Don't Just Consult.
            <br />
            <span className="text-white border-b-4 border-white">We Deliver.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-xl md:text-2xl mb-8 leading-relaxed opacity-90"
          >
            Execution-focused consulting for startups, governments, and public figures.
            <br />
            Transforming ambition into measurable performance across Africa.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="bg-black hover:bg-neutral-gray-800 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
            >
              Book Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Our Services
            </h2>
            <p className="font-inter text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              Comprehensive solutions designed to bridge the execution gap and deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-neutral-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="font-inter text-neutral-dark/70 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center font-inter font-semibold text-primary hover:text-accent transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              We're not just another consulting firm. We're your execution partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="font-inter text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                Bridging Africa's Execution Gap
              </h2>
              <p className="font-inter text-lg text-neutral-dark/80 mb-6 leading-relaxed">
                Born from a desire to close the execution gap plaguing 80% of startups and 60% of government projects in Africa, 
                Arikekpar & Company exists to transform great ideas into scalable outcomes.
              </p>
              <p className="font-inter text-lg text-neutral-dark/80 mb-8 leading-relaxed">
                Unlike traditional consulting firms that stop at advice, we provide hands-on execution support 
                across brand identity, legal structuring, startup development, and government project delivery.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-full font-inter font-semibold transition-colors duration-200"
              >
                Learn Our Story
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Turn Your Ambition into Measurable Results
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Ready to bridge the gap between vision and execution? Let's start the conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started Today
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;