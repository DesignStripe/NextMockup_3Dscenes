import { Lightformer, Environment, SoftShadows, AccumulativeShadows, RandomizedLight } from "@react-three/drei"

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[3, 9, 5]} intensity={2.75} shadow-mapSize={4000}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      {/* @ts-ignore */}
      {/* <SoftShadows frustum={3.75} size={0.01} near={6.5} samples={22} rings={8} /> */}
      <AccumulativeShadows temporal frames={100} color="black" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={1} scale={100}>
        <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <Environment background={false} preset="studio" resolution={128} blur={0.5}>
        {/* <Lightformer position={[-8, 2, -10]} scale={12} intensity={2} /> */}
        <Lightformer position={[1, 2, -10]} scale={12} intensity={2} />
        {/* <Lightformer position={[10, 10, -10]} scale={12} intensity={2} /> */}
        <Lightformer position={[-20, 20, -10]} scale={12} intensity={2} />
        {/* <Lightformer position={[10, -10, 10]} scale={12} intensity={2} /> */}
        <Lightformer position={[20, -10, 30]} rotation={[0, 10, 12]} scale={12} intensity={2} />
      </Environment>
    </>
  )
}
