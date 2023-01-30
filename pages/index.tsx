import SceneB from "@/components/sceneB/sceneB"
import SceneC from "@/components/sceneC/sceneC"
import SceneD from "@/components/sceneD/sceneD"
import { useState } from "react"

export default function Home() {
  const [scene, setScene] = useState<string>("SceneB")

  return (
    <div className="relative">
      <div className="absolute flex space-x-4 top-4 right-4 z-50 text-xs font-medium bg-white/90 backdrop-blur-lg shadow-xl  border-[1px] py-2 px-4 rounded-full">
        <div className="cursor-pointer" onClick={() => setScene("SceneB")}>
          Business card
        </div>
        <div className="cursor-pointer" onClick={() => setScene("SceneC")}>
          Blocks Iphone
        </div>
        <div className="cursor-pointer" onClick={() => setScene("SceneD")}>
          Iphone Studio
        </div>
      </div>
      {scene === "SceneB" && <SceneB />}
      {scene === "SceneC" && <SceneC />}
      {scene === "SceneD" && <SceneD />}
    </div>
  )
}
