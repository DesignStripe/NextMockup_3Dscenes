import { EffectComposer, Bloom, Outline, BrightnessContrast } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

export default function PostProcessing() {
  return (
    <>
      <EffectComposer disableNormalPass multisampling={8} autoClear={false}>
        <BrightnessContrast brightness={0.1} contrast={0.05} blendFunction={BlendFunction.SCREEN} />
        <Bloom luminanceThreshold={1} mipmapBlur intensity={0.1} />
      </EffectComposer>
    </>
  )
}
