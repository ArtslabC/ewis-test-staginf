/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

export default function Lights() {
    const light = useRef()
    // useHelper(light, THREE.DirectionalLightHelper, 5)
    // useFrame((state) => {
    //     light.current.position.z = state.camera.position.z + 1 - 4
    //     light.current.target.position.z = state.camera.position.z - 4
    //     light.current.target.updateMatrixWorld()
    // })

    return <>
        <directionalLight
            ref={light}
            castShadow
            position={[8, 70, 100]}
            intensity={Math.PI *0.5}
            
        />
        <directionalLight
            ref={light}
            castShadow
            position={[8, -70, 100]}
            intensity={Math.PI *0.5}
        />
        <directionalLight
            ref={light}
            castShadow
            position={[8, 70, -100]}
            intensity={Math.PI *0.5}
        />
        <directionalLight
            ref={light}
            castShadow
            position={[-8, 70, 100]}
            intensity={Math.PI *0.5}
        />
        <directionalLight
            ref={light}
            castShadow
            position={[-8, -70, 100]}
            intensity={Math.PI *0.5}
            
        />
        <directionalLight
            ref={light}
            castShadow
            position={[8, -70, -100]}
            intensity={Math.PI *0.5}
        />
        <directionalLight
            ref={light}
            castShadow
            position={[-8, 70, 100]}
            intensity={Math.PI *0.5}
        />
        <directionalLight
            ref={light}
            castShadow
            position={[-8, 70, -100]}
            intensity={Math.PI *0.5}
        />
        <ambientLight intensity={Math.PI * 0.1 } />
    </>
}

// 8, 70, 100
// -8, 70, 100
// 8, -70, 100
// 8, 70, -100
// -8, -70, 100
// 8, -70, -100
// -8, 70, -100
// -8, -70, -100
