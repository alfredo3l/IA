'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content - hidden on mobile */}
        <div className="hidden md:flex w-1/3 p-8 md:p-12 relative z-10 flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Alfredo Oliveira
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Central de Agentes de Inteligência Artificial.
          </p>
        </div>

        {/* Right content - full width on mobile */}
        <div className="w-full md:w-2/3 relative md:-mr-16 md:-my-16 md:scale-110">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
