import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Block, Card } from "./model"
import Lighting from "./lighting"
import PostPro from "./postpro"
import { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import Loading from "@/components/loading"

export default function SceneB() {
  const camRef = useRef()

  return (
    <div className="w-full h-screen relative flex justify-center">
      <Suspense fallback={<Loading />}>
        <div className="relative">
          <div className="absolute top-4 left-4 p-4 bg-white border-[1px] w-[400px] text-sm rounded-lg z-50">
            <div className="space-y-4">
              <h3 className="font-bold tracking-tight">Notes : </h3>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>I have setup the scene to have beautiful SoftShadows from Drei, but its not that performant.</li>
                <li>Shadow bias looks weird (Shadow stripes)</li>
                <li>Need to fix the noise samples, edge glow, and should be more performant.</li>
              </ul>
            </div>
          </div>
        </div>
        <Canvas gl={{ preserveDrawingBuffer: true, stencil: false, premultipliedAlpha: true, antialias: false }} dpr={3} shadows flat>
          <color attach="background" args={["#C4CED2"]} />
          <Block />
          <Card />
          <Lighting />
          <PostPro />
          <OrbitControls enableDamping={false} maxPolarAngle={Math.PI / 2} minPolarAngle={-Math.PI * 2} target={[0, 0.29, -4.5]} />
          <PerspectiveCamera ref={camRef} makeDefault position={[-5.99, 7.878, -7.569]} rotation={new THREE.Euler(-1.95, -0.632, -2.167)} fov={20} />
        </Canvas>
      </Suspense>
    </div>
  )
}
