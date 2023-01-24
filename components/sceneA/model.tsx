import { useState, useEffect, useRef } from "react"
import * as THREE from "three"
import { useGLTF, useTexture, CubeCamera } from "@react-three/drei"
import { ThreeElements } from "@react-three/fiber"

function Rock({ ...props }) {
  const { scene, materials } = useGLTF("/Rocck.glb") as any

  useEffect(() => {
    scene.traverse((object: any) => {
      object.castShadow = true
      object.receiveShadow = true
    })
  }, [scene, materials])

  return (
    <group>
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
      <primitive object={scene} scale={0.2} position={[0, 0.29, 1]} rotation={[0, 1, 0.09]} />
    </group>
  )
}

// function Lens({ ...props }) {
//   const texture = useLoader(RGBELoader, "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/neon_photostudio_1k.hdr")

//   const { nodes, materials } = useGLTF("/Lens.glb") as any

//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Sphere022.geometry} position={[0.95, 1.35, 0.11]} rotation={[-Math.PI / 2, -0.42, -Math.PI / 2]} scale={0.02}>
//         <MeshRefractionMaterial
//           bounces={3}
//           aberrationStrength={0.01}
//           ior={2.75}
//           fresnel={1}
//           color={"white"}
//           fastChroma
//           envMap={texture}
//           toneMapped={false}
//         />
//       </mesh>
//     </group>
//   )
// }

useGLTF.preload("/Lens.glb")

export { Rock, Iphone }
