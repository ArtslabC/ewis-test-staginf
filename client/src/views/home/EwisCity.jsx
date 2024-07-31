// EwisCity.js
import { Physics } from "@react-three/cannon";
import React from "react";
import maincity from "../../assets/models/cityModels/Avengertower.glb";
import bankM from "../../assets/models/cityModels/bank.glb";
import CarTSM from "../../assets/models/cityModels/careeretraining.glb";
import cofe from "../../assets/models/cityModels/Coffee.glb";
import communication from "../../assets/models/cityModels/Communication.glb";
import ESolution from "../../assets/models/cityModels/esolutions.glb";
import estore from "../../assets/models/cityModels/estore.glb";
import hospital from "../../assets/models/cityModels/hospital.glb";
import mart from "../../assets/models/cityModels/mart.glb";
import mamarigo from "../../assets/models/cityModels/merigo.glb";
import periperalR from "../../assets/models/cityModels/PERIPHERALSRED.glb";
import periperal from "../../assets/models/cityModels/peripherials.glb";
import police from "../../assets/models/cityModels/police.glb";
import publicMo from "../../assets/models/cityModels/public.glb";
import school from "../../assets/models/cityModels/School.glb";
import airport from "../../assets/models/cityModels/airport.glb";
import top from "../../assets/models/cityModels/topBranda.glb";
import { useGLTF } from "@react-three/drei";

function EwisCity() {
  const cityM = useGLTF(maincity);
  const bank = useGLTF(bankM);
  const CarTS = useGLTF(CarTSM);
  const cofeM = useGLTF(cofe);
  const communicationM = useGLTF(communication);
  const ESolutionM = useGLTF(ESolution);
  const estoreM = useGLTF(estore);
  const hospitalM = useGLTF(hospital);
  const martM = useGLTF(mart);
  const mamarigoM = useGLTF(mamarigo);
  const periperalMR = useGLTF(periperalR);
  const periperalM = useGLTF(periperal);
  const policeM = useGLTF(police);
  const publicMoO = useGLTF(publicMo);
  const schoolM = useGLTF(school);
  const airportM = useGLTF(airport);
  const topM = useGLTF(top);

  return (
    <>
      <primitive
        object={cityM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={bank.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={CarTS.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={cofeM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={communicationM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={ESolutionM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={estoreM.scene}
        scale={0.025}
        position={[0, -10, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={hospitalM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={martM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={mamarigoM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={periperalMR.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={periperalM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={policeM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={publicMoO.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={schoolM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={airportM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
      <primitive
        object={topM.scene}
        scale={0.025}
        position={[0, -12.5, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}

export default EwisCity;

useGLTF.preload(maincity);
useGLTF.preload(bankM);
useGLTF.preload(CarTSM);
useGLTF.preload(cofe);
useGLTF.preload(communication);
useGLTF.preload(ESolution);
useGLTF.preload(estore);
useGLTF.preload(hospital);
useGLTF.preload(mart);
useGLTF.preload(mamarigo);
useGLTF.preload(periperalR);
useGLTF.preload(periperal);
useGLTF.preload(police);
useGLTF.preload(publicMo);
useGLTF.preload(school);
useGLTF.preload(airport);
useGLTF.preload(top);
// useGLTF.preload(top);
