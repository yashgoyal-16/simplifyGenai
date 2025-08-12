"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import useVapi from '@/hooks/use-vapi';
 
const Orb: React.FC = () => {
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ballRef = useRef<THREE.Mesh | null>(null);
  const originalPositionsRef = useRef<any | null>(null);
  const noise = createNoise3D();
 
  useEffect(() => {
    console.log("Initializing visualization...");
    // Add a small delay to ensure DOM is fully loaded and sized
    const timer = setTimeout(() => {
      initViz();
    }, 100);
    
    window.addEventListener('resize', onWindowResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onWindowResize);
      // Cleanup WebGL resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, []);
 
  useEffect(() => {
    if (isSessionActive && ballRef.current) {
      console.log("Session is active, morphing the ball");
      updateBallMorph(ballRef.current, volumeLevel);
    } else if (!isSessionActive && ballRef.current && originalPositionsRef.current) {
      console.log("Session ended, resetting the ball");
      resetBallMorph(ballRef.current, originalPositionsRef.current);
    }
  }, [volumeLevel, isSessionActive]);
 
  const initViz = () => {
    console.log("Initializing Three.js visualization...");
    const outElement = document.getElementById('out');
    if (!outElement) {
      console.log("Element with ID 'out' not found, Orb component not needed on this page");
      return;
    }

    const scene = new THREE.Scene();
    const group = new THREE.Group();
    const width = Math.max(outElement.clientWidth || 300, 1);
    const height = Math.max(outElement.clientHeight || 300, 1);
    
    // Additional safety check for valid dimensions
    if (width <= 0 || height <= 0) {
      console.warn('Invalid canvas dimensions, skipping WebGL initialization');
      return;
    }
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 100);
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
 
    scene.add(camera);
    sceneRef.current = scene;
    groupRef.current = group;
    cameraRef.current = camera;
 
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // Only set size if dimensions are valid
    if (width > 0 && height > 0) {
      renderer.setSize(width, height);
    } else {
      renderer.setSize(300, 300);
    }
    rendererRef.current = renderer;
 
    const icosahedronGeometry = new THREE.IcosahedronGeometry(10, 8);
    const lambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xFFFFFF,
      wireframe: true,
    });
 
    const ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    ball.position.set(0, 0, 0);
    ballRef.current = ball;
 
    // Store the original positions of the vertices
    originalPositionsRef.current = ball.geometry.attributes.position.array.slice();
 
    group.add(ball);
 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
 
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.9;
    spotLight.position.set(-10, 40, 20);
    spotLight.lookAt(ball.position);
    spotLight.castShadow = true;
    scene.add(spotLight);
 
    scene.add(group);
 
    // We already checked for outElement at the start, so it exists
    outElement.innerHTML = ''; // Clear any existing renderer
    outElement.appendChild(renderer.domElement);
    // Size was already set above with proper validation
 
    render();
  };
 
  const render = () => {
    if (!groupRef.current || !ballRef.current || !cameraRef.current || !rendererRef.current || !sceneRef.current) {
      return;
    }
 
    try {
      groupRef.current.rotation.y += 0.005;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    } catch (error) {
      console.warn('WebGL render error, stopping animation:', error);
      // Stop the render loop to prevent continuous errors
      return;
    }
  };
 
  const onWindowResize = () => {
    if (!cameraRef.current || !rendererRef.current) return;
 
    const outElement = document.getElementById('out');
    if (outElement) {
      cameraRef.current.aspect = outElement.clientWidth / outElement.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(outElement.clientWidth, outElement.clientHeight);
    }
  };
 
  const updateBallMorph = (mesh: THREE.Mesh, volume: number) => {
    console.log("Morphing the ball with volume:", volume);
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.getAttribute('position');
 
    for (let i = 0; i < positionAttribute.count; i++) {
      const vertex = new THREE.Vector3(
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i)
      );
 
      const offset = 10; // Radius of the icosahedron
      const amp = 2.5; // Dramatic effect
      const time = window.performance.now();
      vertex.normalize();
      const rf = 0.00001;
      const distance =
        offset +
        volume * 4 + // Amplify volume effect
        noise(vertex.x + time * rf * 7, vertex.y + time * rf * 8, vertex.z + time * rf * 9) * amp * volume;
      vertex.multiplyScalar(distance);
 
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
 
    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  };
 
  const resetBallMorph = (mesh: THREE.Mesh, originalPositions: Float32Array) => {
    console.log("Resetting the ball to its original shape");
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.getAttribute('position');
 
    for (let i = 0; i < positionAttribute.count; i++) {
      positionAttribute.setXYZ(
        i,
        originalPositions[i * 3],
        originalPositions[i * 3 + 1],
        originalPositions[i * 3 + 2]
      );
    }
 
    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  };
 
  return (
    <div style={{ height: '100%' }}>
      <div id="out" className="hover:cursor-pointer" onClick={toggleCall} style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};
 
export default Orb;