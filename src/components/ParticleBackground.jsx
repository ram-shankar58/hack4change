// src/components/ParticleBackground.jsx
import React from 'react';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import { Particles } from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (Engine) => {
    await loadFull(Engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
          line_linked: { enable: true },
          opacity: { value: 0.3 },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: 'repulse' },
          },
        },
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBackground;
