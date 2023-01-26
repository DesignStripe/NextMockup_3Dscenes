import { useEffect } from "react"
import * as THREE from "three"
import { useGLTF, useTexture } from "@react-three/drei"

function Block({ ...props }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneC/blocks.glb") as any

  useEffect(() => {
    // materials.default_material.color = new THREE.Color("#E4F0F5")
    // materials.Block.roughness = 0.8

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

function Backdrop({ ...props }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneC/backdrop.glb") as any

  useEffect(() => {
    materials["Material.004"].color = new THREE.Color("#FFC000")
    materials["Material.004"].emissive = new THREE.Color("#FFC000")
    materials["Material.004"].emissiveIntensity = 0.3
    materials["Material.004"].roughness = 0.8
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

function Iphone({ matIndex }: { matIndex: number }) {
  const { scene, materials } = useGLTF("/iPhone.glb") as any
  const screenTexture = useTexture("/screen.png")
  screenTexture.repeat = new THREE.Vector2(1, 0.99)

  useEffect(() => {
    materials.BodySheet.color = new THREE.Color("#434343")
    materials.Screen.map = screenTexture
    materials.Screen.emissive = new THREE.Color("white")
    materials.Screen.emissiveMap = screenTexture
    materials.Screen.emissiveIntensity = 0.5
    materials.Screen.metalness = 1
    materials.Screen.roughness = 0
    materials.Screen.specularIntensity = 0
    //make the camera lens not visible
    scene.children[10].visible = false
    materials.Body.roughness = 0.35
    //casting the Shadows
    scene.traverse((object: any) => {
      object.castShadow = true
      object.receiveShadow = true
    })
  }, [scene, materials, screenTexture])

  useEffect(() => {
    materials.Body.metalness = 1
    materials.Body.roughness = 0.2
    if (matIndex == 0) {
      materials.Body.color = new THREE.Color("#676767")
      materials.BodySheet.color = new THREE.Color("#363636")
      materials.Backbody.color = new THREE.Color("#363636")
    }
    if (matIndex == 1) {
      materials.Body.color = new THREE.Color("#AAC0DA")
      materials.BodySheet.color = new THREE.Color("#2B343F")
      materials.Backbody.color = new THREE.Color("#2B343F")
    }
    if (matIndex == 2) {
      materials.Body.color = new THREE.Color("#FFEEDF")
      materials.BodySheet.color = new THREE.Color("#504943")
      materials.Backbody.color = new THREE.Color("#504943")
    }
    if (matIndex == 3) {
      materials.Body.color = new THREE.Color("#E3E3E3")
      materials.BodySheet.color = new THREE.Color("#474747")
      materials.Backbody.color = new THREE.Color("#474747")
    }
    if (matIndex == 4) {
      materials.Body.color = new THREE.Color("#D7E2D4")
      materials.BodySheet.color = new THREE.Color("#485046")
      materials.Backbody.color = new THREE.Color("#485046")
    }
  }, [matIndex, materials])

  return (
    <group>
      <primitive object={scene} scale={2} position={[-1.7, 3.95, -2]} rotation={[0, 2.55, 0.8]} />
    </group>
  )
}

export { Block, Backdrop, Iphone }
