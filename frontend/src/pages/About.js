import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Azibaola Arikekpar",
      role: "Principal Partner",
      bio: "Visionary leader with 15+ years bridging strategy and execution across Africa's business ecosystem. Former McKinsey consultant turned execution specialist.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Tonari Arikekpar",
      role: "Project & Process Management",
      bio: "Operations excellence expert specializing in workflow optimization and KPI-driven delivery systems for complex projects.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c"
    },
    {
      name: "Azibaiye Arikekpar",
      role: "Legal & Compliance",
      bio: "Legal strategist ensuring bulletproof compliance and risk management across startup, corporate, and government engagements.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Azibanato Arikekpar",
      role: "Logistics & Operations",
      bio: "Logistics coordinator orchestrating seamless project delivery and stakeholder management across multiple time zones.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  const values = [
    {
      title: "Execution First",
      description: "We don't just plan and advise. We roll up our sleeves and deliver results alongside our clients.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Integrity Always",
      description: "Transparent communication, honest timelines, and ethical practices form the foundation of every engagement.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Local Insight",
      description: "Deep understanding of African business culture, regulatory environment, and market dynamics.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Global Vision",
      description: "World-class standards and international best practices adapted for local execution excellence.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 92, 75, 0.9), rgba(1, 92, 75, 0.8)), url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              About Arikekpar & Company
            </h1>
            <p className="font-inter text-xl md:text-2xl mb-8 leading-relaxed">
              Born from a desire to close the execution gap plaguing Africa's business ecosystem. 
              We exist to transform great ideas into scalable, measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story */}
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
                Our Founding Story
              </h2>
              <div className="space-y-6 font-inter text-lg text-neutral-dark/80 leading-relaxed">
                <p>
                  After witnessing countless brilliant ideas fail due to execution gaps across Africa, 
                  we realized the consulting industry needed a fundamental shift. Traditional firms 
                  would diagnose problems, create beautiful strategies, and leave clients to figure out implementation.
                </p>
                <p>
                  The statistics were stark: 80% of startups and 60% of government projects were failing 
                  not due to poor strategy, but poor execution. The gap between planning and performance 
                  was costing Africa billions in unrealized potential.
                </p>
                <p>
                  Arikekpar & Company was born to bridge this gap. We don't just consult—we partner, 
                  execute, and deliver alongside our clients until measurable results are achieved.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/32274625/pexels-photo-32274625.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-neutral-dark">Our Mission</h3>
              </div>
              <p className="font-inter text-lg text-neutral-dark/80 text-center leading-relaxed">
                To empower Africa's doers by transforming great ideas into scalable outcomes. 
                We exist to close the execution gap through hands-on partnership and measurable delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-neutral-dark">Our Vision</h3>
              </div>
              <p className="font-inter text-lg text-neutral-dark/80 text-center leading-relaxed">
                A thriving Africa where every ambitious vision becomes reality through world-class 
                execution. We envision an ecosystem where ideas don't die due to implementation gaps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="font-inter text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              The principles that guide every decision, every project, and every partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-neutral-dark mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-neutral-dark/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </h2>
            <p className="font-inter text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              Execution experts united by a shared commitment to turning African ambitions into achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-neutral-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-sm text-neutral-dark/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="font-inter text-xl text-white/90 mb-8">
              Let's discuss how we can bridge your execution gap and deliver measurable results.
            </p>
            <button className="bg-accent hover:bg-accent-600 text-white px-8 py-4 rounded-full font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
              Start the Conversation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;