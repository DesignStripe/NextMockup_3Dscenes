import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei"
import { Iphone } from "./model"
import Lighting from "./lighting"
import { Postprocess } from "./postpro"
import PostProcessing from "../sceneD/postpro"
import { Suspense, useEffect, useRef, useState } from "react"
import * as THREE from "three"
import Loading from "@/components/loading"
import NextImage from "next/image"
import iPhoneBlack from "@/public/iPhone_black.png"
import iPhoneBlue from "@/public/iPhone_blue.png"
import iPhoneGold from "@/public/iPhone_gold.png"
import iPhoneWhite from "@/public/iPhone_white.png"
import iPhoneGreen from "@/public/iPhone_green.png"

export default function SceneE() {
  const [postProMode, setPostProMode] = useState(true)
  const [matIndex, setMatIndex] = useState<number>(0)
  const [pixelRatio, setPixelRatio] = useState(1)
  const camRef = useRef()

  useEffect(() => {
    if (window) setPixelRatio(window.devicePixelRatio)
  }, [])

  return (
    <div className="w-full h-screen relative flex justify-center">
      <Suspense fallback={<Loading />}>
        <div className="relative">
          <div className="absolute top-16 left-4 p-4 bg-white border-[1px] w-[400px] text-sm rounded-lg z-50">
            <div className="space-y-4">
              <h3 className="font-bold tracking-tight">Notes : </h3>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Current post pro mode : {postProMode ? "Default" : "Latest from Darren"}</li>
              </ul>
              <div className="flex gap-2">
                <button onClick={() => setPostProMode(true)}>Default</button>
                <button onClick={() => setPostProMode(false)}>Latest</button>
              </div>
            </div>
          </div>
        </div>
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
        <Canvas
          gl={{
            stencil: false,
            premultipliedAlpha: true,
            antialias: false,
          }}
          dpr={pixelRatio}
          shadows
        >
          <Stats />
          <color attach="background" args={["#1e1e1e"]} />
          <Iphone matIndex={matIndex} />
          <Lighting />
          {/* @ts-ignore */}
          {postProMode ? <PostProcessing /> : <Postprocess smaa={true} samples={8} dPR={pixelRatio} ppType={THREE.HalfFloatType} />}
          <OrbitControls
            onEnd={() => console.log(camRef.current)}
            enableDamping={false}
            maxPolarAngle={Math.PI / 1.94}
            minPolarAngle={Math.PI / 1.94}
            target={[0, 4.5, 0]}
          />
          <PerspectiveCamera ref={camRef} makeDefault position={[10, 3.5, -23]} rotation={new THREE.Euler(3, 0.4, -3)} fov={12} />
        </Canvas>
      </Suspense>
    </div>
  )
}
