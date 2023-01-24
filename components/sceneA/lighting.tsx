import { Lightformer, Environment } from "@react-three/drei"

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.04} />
      <spotLight
        color={[1, 1, 1]}
        intensity={1}
        angle={0.8}
        penumbra={0.5}
        shadow-mapSize={[4000, 4000]}
        position={[1, 3, 7]}
        castShadow
        shadow-bias={-0.0005}
      />
      <Environment resolution={32}>
        <Lightformer position={[10, -10, 10]} scale={10} intensity={1} />
        <Lightformer position={[10, 10, 10]} scale={10} intensity={1} />
        <Lightformer position={[10, 0, -10]} scale={10} intensity={4} />
        <Lightformer position={[-10, -10, -10]} scale={10} intensity={1} />
      </Environment>
    </>
  )
}
