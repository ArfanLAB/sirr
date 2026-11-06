/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden select-none">
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Primary Radial Gradient Fade / Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 119, 198, 0.15), transparent 70%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 255, 255, 0.03), transparent 80%),
            radial-gradient(circle at 50% 50%, transparent 20%, #000000 85%)
          `
        }}
      />

      {/* Subtle Interactive Mouse Glow on the Grid */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 80%)`,
        }}
      />

      {/* Deep Vignette Mask overlay to smoothly blend edges into pure pitch black */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
        }}
      />
    </div>
  );
}
