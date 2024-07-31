import { useGLTF } from '@react-three/drei'
import React from 'react'
import roadM from '../../assets/models/cityModels/lowpollyroad.glb'
function RoadModel() {
    const road = useGLTF(roadM)
    return (
        <>
            <primitive object={road.scene} scale={0.025} position={[0, -12.4, 0]} rotation={[0, 0, 0]} />
        </>
    )
}

export default RoadModel
useGLTF.preload(roadM)