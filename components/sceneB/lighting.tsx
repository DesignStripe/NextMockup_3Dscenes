import { Lightformer, Environment, SoftShadows } from "@react-three/drei"

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight castShadow position={[1, 12, -6]} intensity={0.45} shadow-mapSize={4000}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      {/* @ts-ignore */}
      <SoftShadows frustum={3.75} size={0.01} near={6.5} samples={32} rings={8} />
      <Environment background={false} preset="night" resolution={128}>
        <Lightformer position={[10, -10, 10]} scale={10} intensity={1} />
        {/* <Lightformer position={[10, 10, 10]} scale={10} intensity={1} /> */}
        {/* <Lightformer position={[10, 0, -10]} scale={10} intensity={4} /> */}
        {/* <Lightformer position={[-10, -10, -10]} scale={10} intensity={1} /> */}
      </Environment>
    </>
  )
}
