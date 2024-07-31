import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { angleToRadians } from "../../lib/threeHelper";
import Map from "../Map";
import * as THREE from "three";

export const CameraController = () => {
  const meshRef = useRef();
  const cameraRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const time = clock.getElapsedTime();

    // Update mesh position
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(time) * 2;
      meshRef.current.position.z = Math.cos(time) * 2;
    }

    // Update camera position
    if (cameraRef.current) {
      cameraRef.current.position.x = Math.sin(time) * 2;
      cameraRef.current.position.z = Math.cos(time) * 2;
      cameraRef.current.lookAt(meshRef.current.position);
    }
  });
  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 5, 20]} />
      {/* <OrbitControls
        ref={orbitControlsRef}
        // autoRotate
        // autoRotateSpeed={2.4}
        minPolarAngle={angleToRadians(75)} // Set both min and max to the same value
        maxPolarAngle={angleToRadians(75)}
        enableZoom={false}
        // enablePan={false}
        
        // enableRotate={false}
      /> */}
      <Map />
    </>
  );
};

// const elapsedTime = clock.getElapsedTime();
// const distance = 10 + Math.sin(elapsedTime) * 5; // Example distance calculation

// // Calculate the camera position
// const x = Math.sin(elapsedTime) * distance;
// const y = 5; // Fixed height
// const z = Math.cos(elapsedTime) * distance;

// // Update the camera position and orientation
// cameraRef.current.position.set(x, y, z);
// cameraRef.current.lookAt(0, 0, 0); // Center of the map
