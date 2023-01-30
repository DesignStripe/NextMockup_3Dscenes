import { useEffect } from "react"
import * as THREE from "three"
import { useGLTF, useTexture } from "@react-three/drei"

function Block({ ...props }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneC/blocks.glb") as any

  useEffect(() => {
    materials.block.color = new THREE.Color("#535353")
    materials.block.roughness = 0.95
    materials.block.metalness = 0

    scene.traverse((object: any) => {
      object.castShadow = true
      object.receiveShadow = true
    })
  }, [scene, materials])

  return (
    <group scale={10} position={[0, 0.6, 0]}>
      <primitive object={scene} {...props} />
    </group>
  )
}

function Backdrop({ color }: { color: string }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneC/backdrop.glb") as any

  useEffect(() => {
    scene.traverse((object: any) => {
      object.castShadow = true
      object.receiveShadow = true
    })
  }, [scene, materials])

  useEffect(() => {
    materials["Material.004"].color = new THREE.Color(color)
    materials["Material.004"].emissive = new THREE.Color(color)
    materials["Material.004"].emissiveIntensity = -0.2
    materials["Material.004"].roughness = 0.8
  }, [color, materials])

  return (
    <group scale={10} position={[0, 0.6, 0]}>
      <primitive object={scene} />
    </group>
  )
}

// function Iphone({ matIndex }: { matIndex: number }) {
//   const { scene, materials } = useGLTF("/iPhone.glb") as any
//   const screenTexture = useTexture("/screen.png")
//   screenTexture.repeat = new THREE.Vector2(1, 0.99)

//   useEffect(() => {
//     materials.BodySheet.color = new THREE.Color("#434343")
//     materials.Screen.map = screenTexture
//     materials.Screen.emissive = new THREE.Color("white")
//     materials.Screen.emissiveMap = screenTexture
//     materials.Screen.emissiveIntensity = 0.5
//     materials.Screen.metalness = 1
//     materials.Screen.roughness = 0
//     materials.Screen.specularIntensity = 0
//     //make the camera lens not visible
//     scene.children[10].visible = false
//     materials.Body.roughness = 0.35
//     //casting the Shadows
//     scene.traverse((object: any) => {
//       object.castShadow = true
//       object.receiveShadow = true
//     })
//   }, [scene, materials, screenTexture])

//   useEffect(() => {
//     materials.Body.metalness = 1
//     materials.Body.roughness = 0.2
//     if (matIndex == 0) {
//       materials.Body.color = new THREE.Color("#676767")
//       materials.BodySheet.color = new THREE.Color("#363636")
//       materials.Backbody.color = new THREE.Color("#363636")
//     }
//     if (matIndex == 1) {
//       materials.Body.color = new THREE.Color("#AAC0DA")
//       materials.BodySheet.color = new THREE.Color("#2B343F")
//       materials.Backbody.color = new THREE.Color("#2B343F")
//     }
//     if (matIndex == 2) {
//       materials.Body.color = new THREE.Color("#FFEEDF")
//       materials.BodySheet.color = new THREE.Color("#504943")
//       materials.Backbody.color = new THREE.Color("#504943")
//     }
//     if (matIndex == 3) {
//       materials.Body.color = new THREE.Color("#E3E3E3")
//       materials.BodySheet.color = new THREE.Color("#474747")
//       materials.Backbody.color = new THREE.Color("#474747")
//     }
//     if (matIndex == 4) {
//       materials.Body.color = new THREE.Color("#D7E2D4")
//       materials.BodySheet.color = new THREE.Color("#485046")
//       materials.Backbody.color = new THREE.Color("#485046")
//     }
//   }, [matIndex, materials])

//   return (
//     <group>
//       <primitive object={scene} scale={2} position={[-1.7, 3.95, -2]} rotation={[0, 2.55, 0.8]} />
//     </group>
//   )
// }

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
      <primitive object={scene} scale={0.4} position={[-2, 4.38, 0]} rotation={[-1, 4.2, -0.92]} />
    </group>
  )
}

export { Block, Backdrop, Iphone }
