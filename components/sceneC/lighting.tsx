import { Lightformer, Environment, SoftShadows, AccumulativeShadows, RandomizedLight } from "@react-three/drei"

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[1, 9, -5]} intensity={2.75} shadow-mapSize={4000}>
        <orthographicCamera attach="shadow-camera" args={[-20, 20, -20, 20, 0.1, 50]} />
      </directionalLight>
      {/* @ts-ignore */}
      <SoftShadows frustum={3.75} size={0.01} near={6.5} samples={22} rings={8} />
      <AccumulativeShadows temporal frames={100} color="black" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={1} scale={100}>
        <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <Environment background={false} resolution={128}>
        <Lightformer position={[0, 4, 2]} scale={20} intensity={3} />
        <Lightformer position={[-12, 4, -12]} scale={20} intensity={3} />
      </Environment>
    </>
  )
}
