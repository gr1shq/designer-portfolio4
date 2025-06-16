'use client';

import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FaBehance size={24} />, href: 'https://www.behance.net', label: 'Behance' },
    { icon: <FaDribbble size={24} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="py-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-300">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div>
            <h3 className="text-xl font-bold text-white">Alex Harper</h3>
            <p className="text-sm mt-2">Crafting bold, vibrant designs that tell stories.</p>
          </div>
          {/* Navigation */}
          <div className="flex justify-center">
            <nav className="flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          {/* Socials */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Alex Harper. Made by <a href="https://tapecode.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">Tapecode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;