/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/models/animatedModels/droneonly.glb -o src/views/home/comModels/DroneOnly.jsx -k -K -r -s public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import dronme from '../../../assets/models/animatedModels/droneonly.glb';

export function DroneOnly(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(dronme)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions.dronebody) {
      actions.dronebody.play();
    }
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="drone_body" castShadow receiveShadow geometry={nodes.drone_body.geometry} material={nodes.drone_body.material} position={[-1054.076, 17.135, 497.19]} scale={[3.539, 0.84, 3.539]} />
      </group>
    </group>
  )
}

useGLTF.preload(dronme)