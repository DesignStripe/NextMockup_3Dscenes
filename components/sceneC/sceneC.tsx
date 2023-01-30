import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Block, Backdrop, Iphone } from "./model"
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
import { HexColorPicker } from "react-colorful"
import OutsideClickHandler from "react-outside-click-handler"

export default function SceneC() {
  const camRef = useRef()
  const [bgColor, setBgColor] = useState("#FFC000")
  const [showColorPanel, setShowColorPanel] = useState(false)
  const [matIndex, setMatIndex] = useState<number>(0)

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
        <div className="absolute bottom-10 z-50">
          <div className="bg-white p-3 rounded-xl border-2">
            <div className="flex gap-4 justify-center items-center">
              <div
                onClick={() => setShowColorPanel(true)}
                style={{ backgroundColor: bgColor }}
                className="relative w-[85px] h-[85px] border-2 border-slate-500  rounded-lg text-[10px] font-medium flex items-center justify-center"
              >
                Change color
                {showColorPanel && (
                  <OutsideClickHandler onOutsideClick={() => setShowColorPanel(false)}>
                    <div className="absolute w-[230px] bottom-[110px] bg-white p-4 rounded-xl">
                      <HexColorPicker color={bgColor} onChange={(e) => setBgColor(e)} />
                    </div>
                  </OutsideClickHandler>
                )}
              </div>
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
        </div>
        <Canvas gl={{ preserveDrawingBuffer: true, stencil: false, premultipliedAlpha: true, antialias: false }} dpr={3} shadows flat>
          <color attach="background" args={["#f1f1f1"]} />
          <Block />
          <Backdrop color={bgColor} />
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
          <PerspectiveCamera ref={camRef} makeDefault position={[70, 1, -2.25]} rotation={new THREE.Euler(-2.5, 1.5, -2.5)} fov={12} />
        </Canvas>
      </Suspense>
    </div>
  )
}
