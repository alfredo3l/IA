'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div className="relative w-full h-full [&_canvas+div]:!hidden [&_canvas~div]:!hidden [&_div:not(:has(canvas))>div]:!hidden">
        <Spline
          scene={scene}
          className={className}
        />
      </div>
    </Suspense>
  )
}
