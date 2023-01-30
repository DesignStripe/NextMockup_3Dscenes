import { EffectComposer, Bloom, SSR, SMAA, BrightnessContrast } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import * as THREE from "three"

export default function PostProcessing() {
  return (
    <EffectComposer disableNormalPass={true} multisampling={13} frameBufferType={THREE.HalfFloatType}>
      <SSR />
      <SMAA preset={3} />
      <Bloom kernelSize={5} intensity={0.025} luminanceSmoothing={0.025} luminanceThreshold={0.5} />
      <BrightnessContrast contrast={0.35} />
    </EffectComposer>
  )
}
