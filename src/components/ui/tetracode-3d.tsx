'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface ParticleUserData {
  velocity: THREE.Vector3;
}

const TetraCode3D: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Get responsive scale factors based on current window size
    const getScaleFactors = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        return { 
          textScale: 0.5, 
          fontSize: 140, 
          ringFontSize: 35, 
          spacing: 0.5, 
          radius: 3.0,
          particleCount: 50
        };
      } else if (width < 1024) {
        // Tablet
        return { 
          textScale: 0.7, 
          fontSize: 150, 
          ringFontSize: 40, 
          spacing: 0.7, 
          radius: 3.8,
          particleCount: 75
        };
      } else {
        // Desktop
        return { 
          textScale: 0.9, 
          fontSize: 150, 
          ringFontSize: 40, 
          spacing: 0.8, 
          radius: 4.5,
          particleCount: 100
        };
      }
    };

    const scales = getScaleFactors();

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer setup with transparent background
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      premultipliedAlpha: false
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Fully transparent
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Reduced lighting to prevent background interference
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 1.5, 10);
    pointLight1.position.set(-5, 0, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1.5, 10);
    pointLight2.position.set(5, 0, 3);
    scene.add(pointLight2);

    // Create rotating text ring
    const createTextRing = (): THREE.Group => {
      const group = new THREE.Group();
      const radius = scales.radius;
      const text = "✦ INNOVATING WEB SOLUTIONS ✦ POWERED BY TETRACODE ✦ CREATIVITY MEETS CODE ✦ ";
      
      // Create text sprites
      text.split('').forEach((char: string, index: number) => {
        if (char.trim()) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) return;
          
          canvas.width = 80;
          canvas.height = 80;
          
          // Clear canvas with transparent background
          context.clearRect(0, 0, 80, 80);
          
          // Theme-based colors
          const ringColor = isDarkMode ? 'oklch(0.65 0.22 295)' : 'oklch(0.65 0.22 295)';
          
          // Add subtle glow to ring text
          context.shadowColor = ringColor;
          context.shadowBlur = 3;
          context.fillStyle = ringColor;
          context.font = ` ${scales.ringFontSize}px poppins`;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(char, 40, 40);
          
          const texture = new THREE.CanvasTexture(canvas);
          const material = new THREE.SpriteMaterial({ 
            map: texture, 
            transparent: true,
            alphaTest: 0.1
          });
          const sprite = new THREE.Sprite(material);
          
          const angle = (index / text.length) * Math.PI * 2;
          sprite.position.x = Math.cos(angle) * radius;
          sprite.position.y = Math.sin(angle) * radius;
          sprite.position.z = Math.sin(Date.now() * 0.001 + index) * 0.3;
          sprite.scale.setScalar(0.35 * scales.textScale);
          
          group.add(sprite);
        }
      });
      
      return group;
    };

    // Create center logo with 3D effect
    const createCenterLogo = (): THREE.Group => {
      const group = new THREE.Group();
      
      // Create TetraCode text sprites
      const letters = "TETRACODE";
      const spacing = scales.spacing;
      const startX = -(letters.length - 1) * spacing / 2;
      
      letters.split('').forEach((letter, index) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return;
        
        canvas.width = 140;
        canvas.height = 140;
        
        // Clear canvas with transparent background
        context.clearRect(0, 0, 140, 140);
        
        // Theme-based gradient colors
        const gradient = context.createLinearGradient(0, 0, 0, 140);
        if (isDarkMode) {
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(0.5, 'oklch(0.75 0.18 295)');
          gradient.addColorStop(1, 'oklch(0.65 0.22 295)');
        } else {
          gradient.addColorStop(0, '#A05FFF');
gradient.addColorStop(0.5, 'oklch(0.85 0.12 295)');
gradient.addColorStop(1, 'oklch(0.92 0.08 295)');
        }
        
        context.fillStyle = gradient;
        context.font = ` ${scales.fontSize}px sigmar`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(letter, 70, 70);
        
        // Add stronger glow effect with theme-based color
        const glowColor = isDarkMode ? 'oklch(0.65 0.22 295)' : 'null';
        context.shadowColor = glowColor;
        context.shadowBlur = isDarkMode ? 15 : 0;
        context.fillText(letter, 70, 70);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          alphaTest: 0.1
        });
        const sprite = new THREE.Sprite(material);
        
        sprite.position.x = startX + index * spacing;
        sprite.position.y = 0;
        sprite.position.z = 0.1;
        sprite.scale.setScalar(scales.textScale);
        
        group.add(sprite);
      });
      
      return group;
    };

    // Create floating particles
    const createParticles = (): THREE.Group => {
      const particles = new THREE.Group();
      const particleGeometry = new THREE.SphereGeometry(0.02, 8, 6);
      
      for (let i = 0; i < scales.particleCount; i++) {
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(Math.random() * 0.1 + 0.6, 0.8, 0.6),
          transparent: true,
          opacity: 0.7
        });
        
        const particle = new THREE.Mesh(particleGeometry, material);
        particle.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        );
        
        const userData: ParticleUserData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02
          )
        };
        particle.userData = userData;
        
        particles.add(particle);
      }
      
      return particles;
    };

    // Create 3D elements
    const textRing = createTextRing();
    const centerLogo = createCenterLogo();
    const particles = createParticles();
    
    scene.add(textRing);
    scene.add(centerLogo);
    scene.add(particles);

    // Animation variables
    let time = 0;

    // Animation loop
    const animate = (): void => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate text ring with smoother motion
      textRing.rotation.x = time * 0.25;
      textRing.rotation.y = time * 0.15;

      // Animate center logo with refined motion
      centerLogo.rotation.y = Math.sin(time * 0.4) * 0.08;
      centerLogo.position.y = Math.sin(time * 1.2) * 0.12;
      
      // Add refined scale animation to letters
      centerLogo.children.forEach((sprite, index) => {
        const baseScale = scales.textScale;
        sprite.scale.setScalar(baseScale + Math.sin(time * 1.8 + index * 0.4) * 0.06);
        sprite.position.z = 0.1 + Math.sin(time * 1.5 + index * 0.3) * 0.05;
      });

      // Animate particles with improved motion
      particles.children.forEach((particle, index) => {
        const mesh = particle as THREE.Mesh;
        const userData = mesh.userData as ParticleUserData;
        
        particle.position.add(userData.velocity);
        
        // Reset particle position if it goes too far
        if (particle.position.length() > 12) {
          particle.position.set(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3
          );
        }
        
        // Add enhanced floating motion
        particle.position.y += Math.sin(time * 0.8 + index * 0.1) * 0.003;
        particle.position.x += Math.cos(time * 0.6 + index * 0.15) * 0.001;
      });

      // Animate lights
      pointLight1.position.x = Math.cos(time) * 5;
      pointLight1.position.z = Math.sin(time) * 3;
      pointLight2.position.x = Math.cos(time + Math.PI) * 5;
      pointLight2.position.z = Math.sin(time + Math.PI) * 3;

      // Camera slight movement
      camera.position.x = Math.sin(time * 0.5) * 0.5;
      camera.position.y = Math.cos(time * 0.5) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // Start animation
    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = (): void => {
      if (!mountRef.current || !rendererRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
    };
  }, [isDarkMode, theme]);

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-xl font-semibold animate-pulse ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Loading 3D Experience...
          </div>
        </div>
      )}
      
      {/* 3D Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
};

export default TetraCode3D;