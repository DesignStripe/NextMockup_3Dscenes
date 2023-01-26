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
      <Environment background={false} preset="night" resolution={128}>
        <Lightformer position={[10, -10, 10]} scale={10} intensity={1} />
        <Lightformer position={[10, 10, 10]} scale={10} intensity={1} />
        <Lightformer position={[10, 0, -10]} scale={10} intensity={4} />
        <Lightformer position={[-10, -10, -10]} scale={10} intensity={1} />
      </Environment>
      {/* <spotLight
        position={[2, 3, 0]}
        color={[1, 1, 1]}
        intensity={0.9}
        penumbra={0.9}
        angle={0.6}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0006}
        decay={10}
        distance={40}
        castShadow={true}
      /> */}
      {/* <Environment background={false} preset="night" resolution={128}>
        <Lightformer form="rect" intensity={1} color="white" scale={[1, 5, 1]} target={[0, 0, 0]} position={[2, 1, 0]} />
        <Lightformer form="rect" intensity={1.5} color="white" scale={[1, 1, 1]} target={[0, 0, 0]} position={[-3, 1, -3]} />
        <Lightformer form="rect" intensity={3} color="white" scale={[4, 2, 1]} target={[0, 0, 0]} position={[-2, 1, 2]} />
        <Lightformer form="rect" intensity={1} color="white" scale={[4, 2, 1]} target={[0, 0, 0]} position={[2, -2, -1]} />
      </Environment> */}
    </>
  )
}
