import { Cloud, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useMemo } from 'react'



import { Vector3 } from 'three';
function Clouds({ opacity, ...props }) {

 
    const clouds = useMemo(
        () => [
            // STARTING
            {
                position: new Vector3(-3.5, 65, -7),
            }
            ,
            {
                position: new Vector3(3.5, 65, -10),
            },
            {
                position: new Vector3(15, 65, 10),
            },
            {
                scale: new Vector3(4, 3, 4),
                position: new Vector3(0, 60, 0),

            },
            {
                scale: new Vector3(3, 2, 3),
                position: new Vector3(50, 65, 20),

            },
            {
                scale: new Vector3(3, 2, 3),
                position: new Vector3(-50, 65, -20),

            },
            {
                scale: new Vector3(6, 4, 6),
                position: new Vector3(150, 65, 20),

            },
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(150, 65, 120),

            },
            {
                scale: new Vector3(3, 2, 3),
                position: new Vector3(15, 65, -120),

            },
            {
                scale: new Vector3(3, 2, 3),
                position: new Vector3(50, 65, 120),

            },
            
            {
                position: new Vector3(-3.5, 65, 10),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(120, 60, 10),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(-120, 65, -10),
            },

            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(-18, 60, -68),

            },
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(10, 65, -52),
            },
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(18, 60, 68),

            },
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(-10, 65, 52),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(-5, 65, 52),
            },


        ],
        []
    );
    

    return (
        <>
            {clouds.map((cloud, index) => (
                <Cloud speed={0.5}  {...cloud} key={index} opacity={5} color={"#FFFFFF"}/>
            ))}
        </>
    );
}

export default Clouds
