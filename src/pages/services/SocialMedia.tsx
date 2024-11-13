import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Heart, Share2, MessageCircle, TrendingUp, BarChart2, Award } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: Users2,
    title: 'Community Management',
    description: 'Build and engage with your audience through strategic social media management.',
    link: 'https://sproutsocial.com/insights/social-media-management/'
  },
  {
    icon: Heart,
    title: 'Content Creation',
    description: 'Compelling content that resonates with your target audience and drives engagement.',
    link: 'https://buffer.com/library/social-media-content-strategy/'
  },
  {
    icon: Share2,
    title: 'Social Strategy',
    description: 'Data-driven social media strategies aligned with your business goals.',
    link: 'https://www.socialmediaexaminer.com/social-media-marketing-strategy/'
  },
  {
    icon: MessageCircle,
    title: 'Social Listening',
    description: 'Monitor and analyze social conversations to inform your strategy.',
    link: 'https://blog.hootsuite.com/social-listening-business/'
  },
  {
    icon: TrendingUp,
    title: 'Growth Tactics',
    description: 'Proven strategies to grow your following and increase brand awareness.',
    link: 'https://later.com/blog/social-media-growth-strategies/'
  },
  {
    icon: BarChart2,
    title: 'Analytics & ROI',
    description: 'Comprehensive reporting and ROI tracking for your social campaigns.',
    link: 'https://www.socialmediatoday.com/social-media-analytics/'
  }
];

const platforms = [
  {
    name: 'Instagram',
    metrics: ['Feed Posts', 'Stories', 'Reels', 'Shopping'],
    description: 'Visual storytelling and e-commerce integration'
  },
  {
    name: 'Facebook',
    metrics: ['Organic Posts', 'Paid Ads', 'Groups', 'Events'],
    description: 'Community building and targeted advertising'
  },
  {
    name: 'LinkedIn',
    metrics: ['Company Updates', 'Thought Leadership', 'B2B Marketing'],
    description: 'Professional networking and B2B growth'
  },
  {
    name: 'TikTok',
    metrics: ['Short-form Video', 'Trending Content', 'Influencer Marketing'],
    description: 'Viral content and youth engagement'
  }
];

const SocialMedia = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Social Media Marketing Services Philadelphia | Expert Management"
        description="Transform your social media presence with our expert management services in Philadelphia. Data-driven strategies for Instagram, Facebook, LinkedIn & TikTok."
        keywords="social media marketing philadelphia, social media management, instagram marketing, facebook marketing, linkedin marketing, tiktok marketing"
        canonicalUrl="https://onetapxmedia.com/services/social-media"
      />

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1611162616305-c69b3037e72e?auto=format&fit=crop&q=80"
        height="h-[600px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Social Media Marketing Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Build a powerful brand presence and engage your audience across all social platforms
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                Get Started
                <Share2 className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Social Media Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive social media solutions to grow your brand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <Award className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Platform Expertise</h2>
            <p className="text-xl text-gray-600">
              Strategic management across all major social platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Share2 className="w-4 h-4 text-primary-600 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Success</h2>
            <p className="text-xl text-gray-600">
              Real results from our social media campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '+250%', label: 'Engagement Rate' },
              { metric: '+180%', label: 'Follower Growth' },
              { metric: '+200%', label: 'Social ROI' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-primary-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free social media audit and strategy consultation
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors inline-flex items-center"
            >
              Schedule Consultation
              <Share2 className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;