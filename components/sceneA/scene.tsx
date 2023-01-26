import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Iphone, Rock } from "./model"
import Lighting from "./lighting"
import PostPro from "./postpro"
import { Suspense, useRef, useState } from "react"
import * as THREE from "three"
import Loading from "@/components/loading"
import NextImage from "next/image"
import iPhoneBlack from "@/public/iPhone_black.png"
import iPhoneBlue from "@/public/iPhone_blue.png"
import iPhoneGold from "@/public/iPhone_gold.png"
import iPhoneWhite from "@/public/iPhone_white.png"
import iPhoneGreen from "@/public/iPhone_green.png"
import classNames from "classnames"

function SceneA() {
  const camRef = useRef()
  const [matIndex, setMatIndex] = useState<number>(4)

  return (
    <div className="w-full h-screen relative flex justify-center">
      <Suspense fallback={<Loading />}>
        <div className="absolute bottom-10 z-50">
          <div className="bg-white p-3 rounded-xl">
            <div className="flex gap-3">
              <NextImage
                onClick={() => setMatIndex(0)}
                alt="Iphone Black"
                src={iPhoneBlack}
                width={90}
                height={90}
                className="rounded-xl hover:border-4 hover:border-orange-400 transition duration-300 ease-in-out border-4 border-white"
              />
              <NextImage
                onClick={() => setMatIndex(1)}
                alt="Iphone Black"
                src={iPhoneBlue}
                width={90}
                height={90}
                className="rounded-xl hover:border-4 hover:border-orange-400 transition duration-300 ease-in-out border-4 border-white"
              />
              <NextImage
                onClick={() => setMatIndex(2)}
                alt="Iphone Black"
                src={iPhoneGold}
                width={90}
                height={90}
                className="rounded-xl hover:border-4 hover:border-orange-400 transition duration-300 ease-in-out border-4 border-white"
              />
              <NextImage
                onClick={() => setMatIndex(3)}
                alt="Iphone Black"
                src={iPhoneWhite}
                width={90}
                height={90}
                className="rounded-xl hover:border-4 hover:border-orange-400 transition duration-300 ease-in-out border-4 border-white"
              />
              <NextImage
                onClick={() => setMatIndex(4)}
                alt="Iphone Black"
                src={iPhoneGreen}
                width={90}
                height={90}
                className="rounded-xl hover:border-4 hover:border-orange-400 transition duration-300 ease-in-out border-4 border-white"
              />
            </div>
          </div>
        </div>
        <Canvas gl={{ preserveDrawingBuffer: true, stencil: false, premultipliedAlpha: true, antialias: false }} dpr={3} shadows flat>
          <color attach="background" args={[0, 0, 0]} />
          <Rock />
          <Iphone matIndex={matIndex} />
          <Lighting />
          <PostPro />
          <OrbitControls enableDamping={false} maxPolarAngle={Math.PI / 2} minPolarAngle={-Math.PI * 2} target={[0, 0.29, 1]} />
          <PerspectiveCamera ref={camRef} makeDefault position={[-3.655, 3.99, 3.05]} rotation={new THREE.Euler(-1.0735, -0.724, -1.0582)} fov={12} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default SceneA
