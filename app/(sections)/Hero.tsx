'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Alex Harper";
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    { id: 1, title: 'Branding Design', image: '/images/project1.jpg' },
    { id: 2, title: 'Poster Art', image: '/images/project2.webp' },
    { id: 3, title: 'UI Mockup', image: '/images/project3.webp' },
  ];

  const socials = [
    { icon: <FaBehance size={24} />, href: 'https://www.behance.net', label: 'Behance' },
    { icon: <FaDribbble size={24} />, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com', label: 'LinkedIn' },
  ];

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const subtitle = 'Crafting bold, vibrant designs that tell stories.';
  const subtitleLetters = subtitle.split('');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shapes = [
    { type: 'circle', size: 40, left: '10%', top: '20%', delay: 3 },
    { type: 'triangle', size: 30, left: '80%', top: '30%', delay: 3.2 },
    { type: 'square', size: 35, left: '20%', top: '70%', delay: 3.4 },
  ];

  return (
    <motion.section
      id="hero"
      className="relative h-[600px] md:h-[700px] flex items-center justify-between overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black font-inter px-8 md:px-24 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.3 }} />

      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-[rgba(255,0,255,0.05)] animate-glitch" />
        <div className="absolute inset-0 bg-[rgba(0,255,255,0.05)] animate-glitch2" />
      </div>

      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute z-10 ${
            shape.type === 'circle'
              ? 'rounded-full'
              : shape.type === 'square'
              ? 'rounded'
              : 'border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-purple-500/30'
          } bg-purple-500/20`}
          style={{ width: shape.size, height: shape.size, left: shape.left, top: shape.top }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: shape.delay, ease: 'easeOut' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.1 }}
        />
      ))}

      <div className="relative z-10 w-full md:w-1/2 text-left max-w-lg">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {text}
          <span className="animate-cursor">|</span>
        </motion.h1>
        <div className="text-base md:text-lg text-gray-300 mb-4">
          <AnimatePresence>
            {subtitleLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 + 1 }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex space-x-4 mb-4">
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
        <motion.a
          href="#about"
          onClick={() => scrollToSection('about')}
          className="inline-block px-5 py-2 bg-transparent border border-purple-600 text-purple-600 rounded-full text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn About Me
        </motion.a>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-end space-y-4 max-w-sm">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="relative h-48 md:h-56 overflow-hidden rounded-lg shadow-lg">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: index === currentProject ? 1 : 0, y: index === currentProject ? 0 : 50 }}
                transition={{ duration: 0.5 }}
              >
                <a href="#projects" onClick={() => scrollToSection('projects')}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="absolute bottom-2 left-2 text-gray-200 text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                    {project.title}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.a
          href="#projects"
          onClick={() => scrollToSection('projects')}
          className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full text-base font-semibold hover:bg-purple-700 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.a>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </motion.section>
  );
};

export default Hero;