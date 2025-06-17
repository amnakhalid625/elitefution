import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, ArrowLeft } from 'lucide-react';

// Space-themed team members
const teamMembers = [
  {
    id: 1,
    name: 'Nova Starlight',
    role: 'Astro Designer',
    bio: 'Creates cosmic UI/UX that makes players feel weightless',
    placeholder: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Orion Vector',
    role: 'Gravity Coder',
    bio: 'Warp drives our game physics to new dimensions',
    placeholder: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Lyra Nebulon',
    role: 'Stellar Artist',
    bio: 'Paints galaxies with quantum particle brushes',
    placeholder: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Titan Void',
    role: 'Black Hole Dev',
    bio: 'Compresses code into singularity-efficient algorithms',
    placeholder: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 5,
    name: 'Pulsar Byte',
    role: 'Neon Engineer',
    bio: 'Makes our tech stack emit 12.7Hz cosmic radiation',
    placeholder: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 6,
    name: 'Quasar Qubit',
    role: 'AI Navigator',
    bio: 'Trains neural nets to predict supernova patterns',
    placeholder: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 7,
    name: 'Cosmo Render',
    role: 'Lightyear Artist',
    bio: 'Renders at 186,000 miles per second',
    placeholder: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 8,
    name: 'Eclipse Shader',
    role: 'Dark Matter FX',
    bio: 'Generates the 96% of effects you can\'t see',
    placeholder: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60',
  }
];

const TeamPortfolio = () => {
  const controls = useAnimation();
  const bgRef = useRef(null);
  const [selectedMember, setSelectedMember] = React.useState(null);
  const cursorRef = useRef(null);

  // Cosmic parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = bgRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Background parallax
      controls.start({
        x: x * 80,
        y: y * 80,
        transition: { type: 'spring', damping: 15, stiffness: 100 }
      });

      // Custom cursor effect
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px) rotate(${x * 45}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <div className="relative overflow-hidden bg-gray-950 min-h-screen">
      {/* Cosmic Background */}
      <motion.div 
        className="fixed inset-0 overflow-hidden"
        animate={controls}
        ref={bgRef}
        style={{
          background: 'radial-gradient(ellipse at center, #0f0c29 0%, #1a1a2e 50%, #000000 100%)'
        }}
      >
        {/* Animated Space Elements */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              url('https://www.transparenttextures.com/patterns/starfield.png'),
              url('https://www.transparenttextures.com/patterns/dark-matter.png')
            `,
            backgroundBlendMode: 'screen',
            opacity: 0.3
          }}
        />

        {/* Floating Planets */}
        <motion.div
          className="absolute rounded-full bg-gradient-to-br from-blue-900 to-purple-900"
          style={{
            width: '400px',
            height: '400px',
            top: '20%',
            left: '15%',
            filter: 'blur(60px)',
            opacity: 0.5
          }}
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute rounded-full bg-gradient-to-br from-orange-800 to-red-900"
          style={{
            width: '300px',
            height: '300px',
            bottom: '10%',
            right: '20%',
            filter: 'blur(50px)',
            opacity: 0.4
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px 2px rgba(255,255,255,0.8)'
            }}
            animate={{
              x: [0, window.innerWidth],
              y: [0, window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 10
            }}
          />
        ))}
      </motion.div>

      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed -left-4 -top-4 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(255,165,0,0.8) 0%, rgba(255,165,0,0) 70%)',
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-orange-300 hover:text-white transition-colors group"
        onClick={() => window.history.back()}
      >
        <motion.div 
          className="p-2 bg-gray-900 bg-opacity-70 rounded-full group-hover:bg-orange-500 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowLeft size={20} />
        </motion.div>
        <span className="font-semibold bg-gray-900 bg-opacity-70 px-3 py-1 rounded-lg group-hover:bg-orange-500 transition-colors">
          Warp Back
        </span>
      </motion.button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cosmic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Crew</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The interstellar team bending space-time to create gaming experiences beyond event horizon
          </motion.p>
        </motion.div>

        {/* Team Grid - 2x4 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ 
                opacity: 0, 
                y: 50,
                rotateX: 45,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1,
                transition: { 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                } 
              }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(255, 165, 0, 0.25)',
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-orange-400 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.placeholder} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-orange-300 font-mono">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm font-mono line-clamp-2">{member.bio}</p>
                <div className="flex mt-4 space-x-3">
                  <button className="text-gray-400 hover:text-orange-300 transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-orange-300 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-orange-300 transition-colors">
                    <Twitter size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="relative bg-gray-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-orange-400/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'radial-gradient(ellipse at top, rgba(31,41,55,0.9) 0%, rgba(17,24,39,0.95) 100%)'
                }}
              >
                <button 
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                  onClick={() => setSelectedMember(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative min-h-[500px]">
                    <img 
                      src={selectedMember.placeholder} 
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <h2 className="text-4xl font-bold text-white">{selectedMember.name}</h2>
                      <p className="text-orange-300 text-2xl font-mono mt-2">{selectedMember.role}</p>
                    </div>
                    <div className="absolute top-8 left-8 w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
                  </div>

                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className="text-white font-semibold text-xl mb-4 font-mono tracking-wider">COSMIC PROFILE</h3>
                      <p className="text-gray-300">{selectedMember.bio}</p>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-4 font-mono tracking-wider">SPECIALTIES</h3>
                        <div className="flex flex-wrap gap-3">
                          {['Warp Drive', 'Neural Interface', 'Quantum Render', 'Gravity Wells', 'Dark Matter', 'Singularity'].map((skill) => (
                            <motion.span 
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-200 hover:bg-orange-600 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-xl mb-4 font-mono tracking-wider">TRANSMISSION LINKS</h3>
                        <div className="flex space-x-4">
                          <motion.button 
                            whileHover={{ y: -3 }}
                            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-orange-600 hover:text-white transition-colors"
                          >
                            <Linkedin size={20} />
                          </motion.button>
                          <motion.button 
                            whileHover={{ y: -3 }}
                            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-orange-600 hover:text-white transition-colors"
                          >
                            <Mail size={20} />
                          </motion.button>
                          <motion.button 
                            whileHover={{ y: -3 }}
                            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-orange-600 hover:text-white transition-colors"
                          >
                            <Github size={20} />
                          </motion.button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
{/* Cosmic Skills Section */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-32 relative"
>
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated cosmic background elements */}
    <motion.div 
      className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5
      }}
    />
  </div>

  <div className="relative z-10 container mx-auto px-6">
    <motion.h2 
      className="text-4xl font-bold text-center mb-16 text-white"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Interstellar</span> Skills
    </motion.h2>

    {/* Skills Orbital System */}
    <div className="relative h-96 mb-20">
      {/* Central planet */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 shadow-lg shadow-orange-500/30 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">XP</span>
      </div>

      {/* Orbiting skills */}
      {[
        { name: "3D Modeling", icon: "🪐", color: "text-purple-400" },
        { name: "AI Systems", icon: "🤖", color: "text-blue-400" },
        { name: "Quantum Physics", icon: "⚛️", color: "text-green-400" },
        { name: "Neon VFX", icon: "✨", color: "text-yellow-400" },
        { name: "Warp Coding", icon: "💻", color: "text-red-400" },
        { name: "Gravity Design", icon: "🎨", color: "text-pink-400" },
      ].map((skill, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 150;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={skill.name}
            className={`absolute text-3xl ${skill.color}`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              x: [0, Math.cos(angle + 0.1) * radius - x],
              y: [0, Math.sin(angle + 0.1) * radius - y],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.3 }
            }}
          >
            {skill.icon}
            <motion.div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap text-sm font-mono bg-gray-900/80 px-2 py-1 rounded"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Orbital path */}
      <svg 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        width="320" 
        height="320" 
        viewBox="0 0 320 320"
      >
        <circle 
          cx="160" 
          cy="160" 
          r="150" 
          stroke="rgba(255,165,0,0.2)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="5,5"
        />
      </svg>
    </div>

    {/* Skills Progress Matrix */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { name: "Gravity Engine", level: 92, icon: "🌌" },
        { name: "Quantum Render", level: 88, icon: "🌀" },
        { name: "Neural AI", level: 95, icon: "🧠" },
        { name: "Stellar FX", level: 90, icon: "💫" },
        { name: "Warp Physics", level: 85, icon: "⚡" },
        { name: "Cosmic UI", level: 93, icon: "👁️" },
      ].map((skill, i) => (
        <motion.div
          key={skill.name}
          className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-400 transition-colors"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">{skill.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              <p className="text-orange-400 font-mono text-sm">Mastery: {skill.level}%</p>
            </div>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready for <span className="text-orange-300">Liftoff</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            whileInView={{ y: [10, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our interstellar team and help build the next generation of cosmic gaming experiences.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,165,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Transmit Application</span>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPortfolio;