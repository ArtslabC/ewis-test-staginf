import { useGLTF } from '@react-three/drei'
import React from 'react'
import mountain from '../../assets/models/mountain.glb'
function Mountain() {
    const mounatinM =useGLTF(mountain)
  return (
    <>
    <primitive object={mounatinM.scene} scale={3} position={[0, -25.5, 0]} rotation={[0, 0, 0]}/>
    </>
  )
}

export default Mountain
useGLTF.preload(mountain)