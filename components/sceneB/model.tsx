import { useEffect } from "react"
import * as THREE from "three"
import { useGLTF, useTexture } from "@react-three/drei"

function Block({ ...props }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneB/block.glb") as any

  useEffect(() => {
    materials.Block.color = new THREE.Color("#E4F0F5")
    materials.Block.roughness = 0.8

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

function Card({ ...props }) {
  const { scene, materials } = useGLTF("/sceneAssets/sceneB/card.glb") as any
  const texture = useTexture("/sceneAssets/sceneB/defaultDesign0.png")

  useEffect(() => {
    materials.Card.map = texture
    materials.Card.roughness = 0.9
    scene.traverse((object: any) => {
      object.castShadow = true
      object.receiveShadow = true
    })
  }, [scene, materials, texture])

  return (
    <group>
      <primitive object={scene} {...props} />
    </group>
  )
}

export { Block, Card }
