'use client';

import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FaBehance size={24} />, href: 'https://www.behance.net', label: 'Behance' },
    { icon: <FaDribbble size={24} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-white tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/">Alex Harper</Link>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 + index * 0.2 }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex space-x-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 + index * 0.2 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;