/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {  useGLTF } from "@react-three/drei";
import plane from '../../assets/models/plane.glb'


// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function PlaneFlight() {
  const birdScene = useGLTF(plane)
  const plaRef = useRef();

  useFrame(() => {
    // Assuming the airplane moves along the x-axis, increase x
    plaRef.current.position.x += 1 * Math.PI / 2 / 2 / 2;

    // If the airplane's x position is greater than 120, reset it
    if (plaRef.current.position.x > 120) {
      plaRef.current.position.x = -120; // Adjust this value as needed for the loop start
    }
  });
 
  return (
    // to create and display 3D objects
    <>

      <mesh
        ref={plaRef}
        position={[0, 30, 10]}
        scale={0.3}
        rotation={[0, 0, 0]}
      >

        <primitive object={birdScene.scene} />
      </mesh>
      
    </>
  );
}
useGLTF.preload(plane)