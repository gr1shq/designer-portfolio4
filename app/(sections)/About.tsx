'use client';

import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = ['Branding', 'UI/UX Design', 'Illustration', 'Typography', 'Motion Graphics'];

  return (
    <motion.section
      id="about"
      className="py-16 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-8 md:px-24">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg">
              I’m Alex Harper, a passionate graphic designer with over 5 years of experience crafting bold, vibrant visuals that tell stories. My work blends creativity with strategy, bringing brands to life through logos, posters, UI designs, and more.
            </p>
            <p className="text-gray-300 text-lg">
              Based in Earth, I thrive on collaborating with clients to turn their ideas into stunning designs. When I’m not designing, you’ll find me sketching, exploring new art trends, or sipping artisan coffee.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/alex.jpg"
              alt="Alex Harper"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-[rgba(255,0,255,0.05)] animate-glitch pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;