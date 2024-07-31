import React from 'react'
import { useGLTF } from '@react-three/drei'

import efac from '../../assets/models/villageModels/Efac.glb'
import gas from '../../assets/models/villageModels/gas.glb'
import hosAM from '../../assets/models/villageModels/Hosptialambulance.glb'
import hoO from '../../assets/models/villageModels/House1.glb'
import hoTh from '../../assets/models/villageModels/house2.glb'
import hoThr from '../../assets/models/villageModels/House3.glb'
import kopiK from '../../assets/models/villageModels/Kopikade.glb'
import vb from '../../assets/models/villageModels/villagebank.glb'
import vf from '../../assets/models/villageModels/villagefactory.glb'
import vs from '../../assets/models/villageModels/Villageschool.glb'
import ground from '../../assets/models/villageModels/ground.glb'
import stadium from '../../assets/models/villageModels/stadium.glb'

function VIllage() {
    const efacM = useGLTF(efac)
    const gasM = useGLTF(gas)
    const hosAMM = useGLTF(hosAM)
    const hoOM = useGLTF(hoO)
    const hoThM = useGLTF(hoTh)
    const hoThrM = useGLTF(hoThr)
    const kopiM = useGLTF(kopiK)
    const vbM = useGLTF(vb)
    const vfM = useGLTF(vf)
    const vsM = useGLTF(vs)
    const groundM = useGLTF(ground)
    const stadiumM = useGLTF(stadium)
  
    return (
        <>
            <primitive object={efacM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={gasM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={hosAMM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={hoOM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={hoThM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={hoThrM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={kopiM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={vbM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={vfM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={vsM.scene} scale={0.025} position={[0, -12.5, 0]} rotation={[0, 0, 0]} />
            <primitive object={groundM.scene} scale={0.025} position={[0, -12.45, 0]} rotation={[0, 0, 0]} />
            <primitive object={stadiumM.scene} scale={0.025} position={[0, -12.45, 0]} rotation={[0, 0, 0]} />

        </>
    )
}

export default VIllage
useGLTF.preload(efac)
useGLTF.preload(gas)
useGLTF.preload(hosAM)
useGLTF.preload(hoO)
useGLTF.preload(hoTh)
useGLTF.preload(hoThr)
useGLTF.preload(kopiK)
useGLTF.preload(vb)
useGLTF.preload(vf)
useGLTF.preload(vs)
useGLTF.preload(ground)
useGLTF.preload(stadium)