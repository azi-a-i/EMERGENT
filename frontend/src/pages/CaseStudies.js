import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users, Target } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "From Idea to Impact",
      subtitle: "FinTech Startup Acceleration",
      category: "Startup",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      challenge: "A promising FinTech idea with no clear path to market, limited technical resources, and urgent funding needs.",
      solution: "End-to-end acceleration including MVP development, legal structure, pitch deck creation, and investor introductions.",
      results: [
        "3x faster time-to-market (6 months vs industry average 18 months)",
        "$2.5M seed funding raised within 8 months",
        "Legal compliance framework established",
        "200% user growth in first quarter post-launch"
      ],
      metrics: {
        timeframe: "8 months",
        funding: "$2.5M raised",
        growth: "200% user growth"
      },
      testimonial: "Arikekpar & Company didn't just advise us - they built alongside us. Their execution-first approach turned our vision into a funded, growing company.",
      client: "TechPay Solutions"
    },
    {
      title: "Turning Policy into Projects",
      subtitle: "Government Infrastructure Delivery",
      category: "Government",
      image: "https://images.pexels.com/photos/7841439/pexels-photo-7841439.jpeg",
      challenge: "Stalled infrastructure project facing compliance issues, stakeholder conflicts, and budget overruns.",
      solution: "Comprehensive project rescue including stakeholder alignment, compliance remediation, and performance tracking systems.",
      results: [
        "100% compliance achieved within 3 months",
        "Project delivered 20% under revised budget",
        "6-month acceleration in completion timeline",
        "Zero regulatory issues or penalties"
      ],
      metrics: {
        timeframe: "12 months",
        savings: "20% under budget",
        acceleration: "6 months faster"
      },
      testimonial: "Their systematic approach to government project delivery is unmatched. They understand both the technical and political complexities.",
      client: "FCT Infrastructure Development"
    },
    {
      title: "How Influence Became Income",
      subtitle: "Personal Brand Monetization",
      category: "Personal Brand",
      image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
      challenge: "High-profile individual with significant social influence but no structured monetization strategy or brand management.",
      solution: "Complete personal brand overhaul including positioning strategy, content systems, and revenue stream development.",
      results: [
        "5x increase in social media engagement",
        "300% growth in speaking engagement fees",
        "Multiple new revenue streams established",
        "Personal brand valued at $1.2M annually"
      ],
      metrics: {
        engagement: "5x increase",
        revenue: "300% fee growth",
        value: "$1.2M brand value"
      },
      testimonial: "They transformed my influence into a sustainable business model. My personal brand is now a significant revenue driver.",
      client: "Dr. Sarah Adebayo, Public Speaker"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into current state, challenges, and desired outcomes"
    },
    {
      step: "02", 
      title: "Strategic Planning",
      description: "Develop comprehensive execution roadmap with clear milestones"
    },
    {
      step: "03",
      title: "Hands-On Implementation", 
      description: "Work alongside your team to execute and deliver results"
    },
    {
      step: "04",
      title: "Performance Tracking",
      description: "Monitor KPIs and adjust strategy based on real-time data"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 92, 75, 0.9), rgba(1, 92, 75, 0.8)), url('https://images.unsplash.com/photo-1542744094-24638eff58bb')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              Real transformations. Measurable results. Execution excellence across startups, government, and personal brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-inter font-medium mb-2">
                      {study.category}
                    </span>
                    <h3 className="font-playfair text-2xl font-bold text-white">
                      {study.title}
                    </h3>
                    <p className="font-inter text-white/90">
                      {study.subtitle}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-neutral-dark mb-3 text-lg">The Challenge</h4>
                  <p className="font-inter text-neutral-dark/80 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-neutral-dark mb-3 text-lg">Our Solution</h4>
                  <p className="font-inter text-neutral-dark/80 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-inter font-semibold text-neutral-dark mb-3 text-lg">Results Achieved</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-inter text-neutral-dark/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-lg p-4 text-center shadow-md">
                      <div className="font-playfair font-bold text-xl text-primary mb-1">
                        {value}
                      </div>
                      <div className="font-inter text-sm text-neutral-dark/70 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                  <p className="font-inter italic text-neutral-dark/80 mb-3">
                    "{study.testimonial}"
                  </p>
                  <p className="font-inter font-semibold text-primary">
                    — {study.client}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Our Proven Process
            </h2>
            <p className="font-inter text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              Every success story follows our systematic approach to execution excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-playfair font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-primary/20"></div>
                  )}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-neutral-dark mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-neutral-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Join the growing list of clients who've transformed ambition into measurable achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105">
                View More Cases
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;