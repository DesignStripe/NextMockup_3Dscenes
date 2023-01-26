import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Block, Backdrop, Iphone } from "./model"
import Lighting from "./lighting"
import PostPro from "./postpro"
import { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import Loading from "@/components/loading"

export default function SceneC() {
  const camRef = useRef()

  return (
    <div className="w-full h-screen relative flex justify-center">
      <Suspense fallback={<Loading />}>
        <div className="relative">
          <div className="absolute top-4 left-4 p-4 bg-white border-[1px] w-[400px] text-sm rounded-lg z-50">
            <div className="space-y-4">
              <h3 className="font-bold tracking-tight">Notes : </h3>
              <p>I still working on this scene</p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Something weird with Directional lights, i-d like to scale up the penumbra/radius</li>
                <li>Is there any way to make lighting only affects on particular objects either the reflection or the light?</li>
              </ul>
            </div>
          </div>
        </div>
        <Canvas gl={{ preserveDrawingBuffer: true, stencil: false, premultipliedAlpha: true, antialias: false }} dpr={3} shadows flat>
          <color attach="background" args={["#C4CED2"]} />
          <Block />
          <Backdrop />
          <Iphone matIndex={0} />
          <Lighting />
          <PostPro />
          <OrbitControls
            onEnd={() => console.log(camRef.current)}
            enableDamping={false}
            maxPolarAngle={Math.PI / 1.94}
            minPolarAngle={Math.PI / 1.94}
            target={[0, 5, 0]}
          />
          <PerspectiveCamera ref={camRef} makeDefault position={[64, 1.8, -4.3]} rotation={new THREE.Euler(-2.5, 1.5, -2.5)} fov={12} />
        </Canvas>
      </Suspense>
    </div>
  )
}
