
import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-particle"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-particle" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-particle" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-particle" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/25 rounded-full animate-particle" style={{animationDelay: '8s'}}></div>
      <div className="absolute top-1/6 left-1/2 w-1 h-1 bg-accent/35 rounded-full animate-particle" style={{animationDelay: '10s'}}></div>
    </div>
  );
};

export default ParticleBackground;
