import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      organization: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@arikekparco.com",
      action: "mailto:info@arikekparco.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+234 905 997 7159",
      action: "tel:+2349059977159"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: "No. 7, Federal Capital Territory, Abuja, Nigeria",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM WAT",
      action: null
    }
  ];

  const services = [
    "Startup Acceleration",
    "Brand Identity Development", 
    "Product & Project Execution",
    "Government Contract Support",
    "Public Figure Monetization"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 92, 75, 0.9), rgba(1, 92, 75, 0.8)), url('https://images.unsplash.com/photo-1504297050568-910d24c426d3')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Start the Conversation
            </h1>
            <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your ambition into measurable results? We're here to help bridge your execution gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="font-playfair text-3xl font-bold text-neutral-dark mb-6">
                  Book Your Consultation
                </h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="font-inter text-green-800">
                      Thank you! We'll be in touch within 24 hours.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter font-medium text-neutral-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-inter"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-inter font-medium text-neutral-dark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-inter"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-neutral-dark mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-inter"
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-neutral-dark mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-inter"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-neutral-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors font-inter resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send size={20} className="ml-2" />
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="font-playfair text-2xl font-bold text-neutral-dark mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={info.title} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-inter font-semibold text-neutral-dark mb-1">
                            {info.title}
                          </h4>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="font-inter text-neutral-dark/70 hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="font-inter text-neutral-dark/70">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternative Contact Methods */}
                <div className="bg-primary rounded-2xl p-8 text-white">
                  <h3 className="font-playfair text-2xl font-bold mb-4">
                    Prefer a Quick Chat?
                  </h3>
                  <p className="font-inter mb-6 opacity-90">
                    Sometimes a conversation is faster than emails. 
                    Schedule a 15-minute discovery call to discuss your needs.
                  </p>
                  <button className="w-full bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-colors duration-200">
                    Schedule Call
                  </button>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="font-playfair text-xl font-bold text-green-800 mb-3">
                    WhatsApp Direct
                  </h3>
                  <p className="font-inter text-green-700 mb-4">
                    Need immediate assistance? Message us directly on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/2349059977159"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Message on WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;