import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, CheckCircle, Users, ArrowRight, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Startup Acceleration",
      description: "From concept to pitch deck, MVP, legal structure, and fundraising prep.",
      icon: <Zap className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg",
      details: {
        what: "Comprehensive startup development from idea validation to market entry",
        how: "We work alongside founders through structured sprints covering market research, MVP development, legal setup, and investor readiness",
        why: "80% of startups fail due to execution gaps. Our hands-on approach bridges strategy and implementation",
        impact: "Average 3x faster time-to-market and 2x higher fundraising success rate"
      },
      features: [
        "Market Research & Validation",
        "MVP Development & Testing",
        "Legal Structure & Compliance",
        "Pitch Deck Creation",
        "Investor Network Access",
        "Post-Launch Support"
      ]
    },
    {
      title: "Brand Identity Development",
      description: "Complete brand ecosystem including logos, websites, positioning, and growth strategies.",
      icon: <Target className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/9432946/pexels-photo-9432946.jpeg",
      details: {
        what: "End-to-end brand development from visual identity to digital presence",
        how: "Strategic brand workshops, creative development, digital implementation, and growth positioning",
        why: "Strong brands command premium pricing and customer loyalty in competitive markets",
        impact: "Clients see average 40% increase in brand recognition and 25% improvement in conversion rates"
      },
      features: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity",
        "Website Development",
        "Social Media Kits",
        "Brand Guidelines",
        "Growth Marketing Strategy"
      ]
    },
    {
      title: "Product & Project Execution",
      description: "Workflow optimization, KPI tracking, and delivery support for complex projects.",
      icon: <CheckCircle className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/9870142/pexels-photo-9870142.jpeg",
      details: {
        what: "Systematic project management and execution support with performance tracking",
        how: "Implementation of proven frameworks, KPI systems, and workflow optimization",
        why: "Projects fail due to poor execution, not poor planning. We ensure delivery excellence",
        impact: "95% on-time delivery rate and 30% improvement in project efficiency"
      },
      features: [
        "Project Planning & Scoping",
        "Workflow Optimization",
        "KPI Development & Tracking",
        "Team Coordination",
        "Quality Assurance",
        "Performance Analytics"
      ]
    },
    {
      title: "Government Contract Support",
      description: "Project execution, compliance management, and stakeholder alignment for public sector work.",
      icon: <Users className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/7103104/pexels-photo-7103104.jpeg",
      details: {
        what: "Specialized support for government contracts and public sector project delivery",
        how: "Compliance-first approach with stakeholder management and transparent reporting",
        why: "60% of government projects face delays. Our expertise ensures successful delivery",
        impact: "100% compliance record and average 20% faster project completion"
      },
      features: [
        "Compliance Management",
        "Stakeholder Coordination",
        "Documentation & Reporting",
        "Risk Assessment",
        "Quality Control",
        "Public Sector Expertise"
      ]
    },
    {
      title: "Public Figure Monetization",
      description: "Personal brand strategy, content systems, and audience growth for influence monetization.",
      icon: <TrendingUp className="w-12 h-12" />,
      image: "https://images.pexels.com/photos/7563690/pexels-photo-7563690.jpeg",
      details: {
        what: "Strategic personal brand development and monetization for public figures",
        how: "Brand positioning, content strategy, audience building, and revenue stream development",
        why: "Personal influence is the new currency. We help convert attention into income",
        impact: "Clients achieve average 5x growth in audience and 300% increase in revenue streams"
      },
      features: [
        "Personal Brand Strategy",
        "Content Calendar Development",
        "Audience Growth Systems",
        "Monetization Strategies",
        "Speaking Opportunities",
        "Media Relations"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 92, 75, 0.9), rgba(1, 92, 75, 0.8)), url('https://images.unsplash.com/photo-1532103054090-3491f1a05d0d')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter text-xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive solutions designed to bridge the execution gap and deliver measurable results across every aspect of your business.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary mr-4">
                    {service.icon}
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-neutral-dark">
                    {service.title}
                  </h2>
                </div>
                
                <p className="font-inter text-lg text-neutral-dark/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-inter font-semibold text-neutral-dark mb-2">What It Is:</h4>
                    <p className="font-inter text-neutral-dark/70">{service.details.what}</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-neutral-dark mb-2">How It Works:</h4>
                    <p className="font-inter text-neutral-dark/70">{service.details.how}</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-neutral-dark mb-2">Why It Matters:</h4>
                    <p className="font-inter text-neutral-dark/70">{service.details.why}</p>
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-neutral-dark mb-2">Client Impact:</h4>
                    <p className="font-inter text-neutral-dark/70 font-medium">{service.details.impact}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-inter font-semibold text-neutral-dark mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span className="font-inter text-sm text-neutral-dark/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-full font-inter font-semibold transition-colors duration-200 flex items-center">
                  Learn More
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Close Your Execution Gap?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Let's discuss which services align with your goals and create a custom execution plan.
            </p>
            <button className="bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center mx-auto">
              Schedule Consultation
              <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;