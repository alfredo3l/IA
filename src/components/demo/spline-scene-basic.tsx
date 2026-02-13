'use client'

import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SPLINE_SCENES } from "@/constants"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="w-full h-full relative">
        <SplineScene 
          scene={SPLINE_SCENES.robot}
          className="w-full h-full"
        />
      </div>
    </Card>
  )
}
