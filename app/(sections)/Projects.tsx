'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Brand Identity for EcoVibe',
      description: 'Designed a modern, sustainable brand identity for EcoVibe, including logo, color palette, and marketing materials.',
      tools: ['Adobe Illustrator', 'Figma'],
      image: '/images/project1.jpg',
    },
    {
      id: 2,
      title: 'Concert Poster Series',
      description: 'Created a vibrant series of posters for a music festival, blending bold typography and dynamic illustrations.',
      tools: ['Adobe Photoshop', 'Procreate'],
      image: '/images/project2.webp',
    },
    {
      id: 3,
      title: 'Mobile App UI Design',
      description: 'Crafted intuitive and visually appealing UI for a fitness app, focusing on user experience and aesthetics.',
      tools: ['Figma', 'Adobe XD'],
      image: '/images/project3.webp',
    },
    {
      id: 4,
      title: 'Packaging for Artisan Coffee',
      description: 'Developed eye-catching packaging for a premium coffee brand, emphasizing earthy tones and minimal design.',
      tools: ['Adobe Illustrator', 'InDesign'],
      image: '/images/project4.jpg',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-8 md:px-24">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;