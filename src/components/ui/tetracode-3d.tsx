'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ParticleUserData {
  velocity: THREE.Vector3;
}

const TetraCode3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f23);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 2, 10);
    pointLight1.position.set(-5, 0, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2, 10);
    pointLight2.position.set(5, 0, 3);
    scene.add(pointLight2);

    // Create rotating text ring
    const createTextRing = (): THREE.Group => {
      const group = new THREE.Group();
      const radius = 4;
      const text = "✦ INNOVATING WEB SOLUTIONS ✦ POWERED BY TETRACODE ✦ CREATIVITY MEETS CODE ✦ ";
      
      // Create text sprites
      text.split('').forEach((char: string, index: number) => {
        if (char.trim()) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) return;
          
          canvas.width = 64;
          canvas.height = 64;
          
          context.fillStyle = '#6366f1';
          context.font = 'bold 24px Arial';
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(char, 32, 32);
          
          const texture = new THREE.CanvasTexture(canvas);
          const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
          const sprite = new THREE.Sprite(material);
          
          const angle = (index / text.length) * Math.PI * 2;
          sprite.position.x = Math.cos(angle) * radius;
          sprite.position.y = Math.sin(angle) * radius;
          sprite.position.z = Math.sin(Date.now() * 0.001 + index) * 0.2;
          sprite.scale.setScalar(0.3);
          
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
      const spacing = 0.6;
      const startX = -(letters.length - 1) * spacing / 2;
      
      letters.split('').forEach((letter, index) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return;
        
        canvas.width = 128;
        canvas.height = 128;
        
        // Create gradient
        const gradient = context.createLinearGradient(0, 0, 0, 128);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(1, '#a855f7');
        
        context.fillStyle = gradient;
        context.font = 'bold 72px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(letter, 64, 64);
        
        // Add glow effect
        context.shadowColor = '#6366f1';
        context.shadowBlur = 20;
        context.fillText(letter, 64, 64);
        
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
        sprite.scale.setScalar(0.8);
        
        group.add(sprite);
      });
      
      return group;
    };

    // Create floating particles
    const createParticles = (): THREE.Group => {
      const particles = new THREE.Group();
      const particleGeometry = new THREE.SphereGeometry(0.02, 8, 6);
      
      for (let i = 0; i < 100; i++) {
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

      // Rotate text ring
      textRing.rotation.x = time * 0.3;
      textRing.rotation.y = time * 0.2;

      // Animate center logo
      centerLogo.rotation.y = Math.sin(time * 0.5) * 0.05;
      centerLogo.position.y = Math.sin(time * 1.5) * 0.1;
      
      // Add slight scale animation to letters
      centerLogo.children.forEach((sprite, index) => {
        sprite.scale.setScalar(0.8 + Math.sin(time * 2 + index * 0.5) * 0.05);
      });

      // Animate particles
      particles.children.forEach((particle, index) => {
        const mesh = particle as THREE.Mesh;
        const userData = mesh.userData as ParticleUserData;
        
        particle.position.add(userData.velocity);
        
        // Reset particle position if it goes too far
        if (particle.position.length() > 10) {
          particle.position.set(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          );
        }
        
        // Add floating motion
        particle.position.y += Math.sin(time + index) * 0.002;
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
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <div className="text-white text-xl font-semibold animate-pulse">
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
      
      {/* UI Overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-wider">
          TETRACODE
        </h1>
        <p className="text-lg text-purple-300 font-medium">
          Innovating Web Solutions Through Creative Code
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-32 right-16 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

export default TetraCode3D;