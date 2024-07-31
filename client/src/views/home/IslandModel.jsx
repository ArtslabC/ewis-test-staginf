import React from 'react'
import land from '../../assets/models/IslandTwo.glb'
import landTwo from '../../assets/models/IslandThree.glb'

import { useGLTF } from '@react-three/drei'
function IslandModel() {
    const landM = useGLTF(land)
    const landTwoM = useGLTF(landTwo)
   

    return (
        <>
            <primitive object={landM.scene} scale={20} position={[150,-32, 0]} rotation={[0, 0, 0]} />
            <primitive object={landTwoM.scene} scale={1} position={[-200,-25, 50]} rotation={[0, 0, 0]} />
            
        </>
    )
}

export default IslandModel
useGLTF.preload(land)
useGLTF.preload(landTwo)
