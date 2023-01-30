import { useEffect } from "react"
import * as THREE from "three"
import { useGLTF, useTexture } from "@react-three/drei"

function Iphone({ matIndex = 0 }: { matIndex: number }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneD/iPhone.glb") as any
  const screenTexture = useTexture("/sceneAssets/sceneD/screen.png")
  screenTexture.repeat = new THREE.Vector2(1, 1)

  useEffect(() => {
    materials["screenFrame"].roughness = 0.8
    materials["Material.020"].map = screenTexture
    materials["Material.020"].emissive = new THREE.Color("white")
    materials["Material.020"].emissiveMap = screenTexture
    materials["Material.020"].emissiveIntensity = 0.4
    materials["Material.020"].metalness = 0.9
    materials["Material.020"].roughness = 0.8
    materials["Material.020"].specularIntensity = 0
    //casting the Shadows
    scene.traverse((object: any) => {
      object.castShadow = true
      object.receiveShadow = true
    })
  }, [scene, materials, screenTexture])

  useEffect(() => {
    materials["bodySteel"].metalness = 1
    materials["bodySteel"].roughness = 0.1
    materials["bodySteel"].specularIntensity = 0
    if (matIndex == 0) {
      materials.bodySteel.color = new THREE.Color("#676767")
      materials.bodyList.color = new THREE.Color("#363636")
      materials.bodyBack.color = new THREE.Color("#363636")
    }
    if (matIndex == 1) {
      materials.bodySteel.color = new THREE.Color("#AAC0DA")
      materials.bodyList.color = new THREE.Color("#2B343F")
      materials.bodyBack.color = new THREE.Color("#2B343F")
    }
    if (matIndex == 2) {
      materials.bodySteel.color = new THREE.Color("#FFEEDF")
      materials.bodyList.color = new THREE.Color("#504943")
      materials.bodyBack.color = new THREE.Color("#504943")
    }
    if (matIndex == 3) {
      materials.bodySteel.color = new THREE.Color("#E3E3E3")
      materials.bodyList.color = new THREE.Color("#474747")
      materials.bodyBack.color = new THREE.Color("#474747")
    }
    if (matIndex == 4) {
      materials.bodySteel.color = new THREE.Color("#D7E2D4")
      materials.bodyList.color = new THREE.Color("#485046")
      materials.bodyBack.color = new THREE.Color("#485046")
    }
  }, [matIndex, materials])

  return (
    <group>
      <primitive object={scene} scale={0.2} position={[0, 4.5, 0]} rotation={[0, 0, 0]} />
    </group>
  )
}

export { Iphone }
