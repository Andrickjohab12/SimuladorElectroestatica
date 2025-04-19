"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function WaterExperiment() {
  const [rulerCharged, setRulerCharged] = useState(false)
  const [rulerPosition, setRulerPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isRubbing, setIsRubbing] = useState(false)
  const [curvature, setCurvature] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const rulerRef = useRef<HTMLDivElement>(null)
  const waterStreamRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Reset the simulation
  const resetSimulation = () => {
    setRulerCharged(false)
    setRulerPosition({ x: 0, y: 0 })
    setCurvature(0)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }

  // Charge the ruler by rubbing it
  const chargeRuler = () => {
    setIsRubbing(true)

    // Animate the rubbing effect
    setTimeout(() => {
      setIsRubbing(false)
      setRulerCharged(true)
    }, 1500)
  }

  // Calculate the curvature of the water stream based on ruler position
  useEffect(() => {
    if (!rulerCharged || !rulerRef.current || isDragging) return

    const rulerRect = rulerRef.current.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 }

    // Calculate distance from ruler to water stream
    const rulerCenterX = rulerRect.left + rulerRect.width / 2 - containerRect.left
    const waterStreamX = 150 // Fixed X position of water stream

    const dx = rulerCenterX - waterStreamX
    const distance = Math.abs(dx)

    // Calculate curvature based on distance and direction
    const maxDistance = 200
    const maxCurvature = 80

    if (distance < maxDistance) {
      // Direction of curvature depends on which side the ruler is on
      const direction = dx > 0 ? 1 : -1
      const strength = 1 - Math.min(distance, maxDistance) / maxDistance
      setCurvature(direction * strength * maxCurvature)
    } else {
      setCurvature(0)
    }
  }, [rulerCharged, rulerPosition, isDragging])

  // Draw the water stream
  useEffect(() => {
    if (!waterStreamRef.current) return

    const canvas = waterStreamRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawWaterStream = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw water stream
      const startX = 150
      const startY = 60
      const endY = 400

      // Create gradient for water
      const gradient = ctx.createLinearGradient(0, 0, 0, endY)
      gradient.addColorStop(0, "#60A5FA") // Light blue
      gradient.addColorStop(1, "#2563EB") // Darker blue

      ctx.strokeStyle = gradient
      ctx.lineWidth = 8

      // Draw curved path for water stream
      ctx.beginPath()
      ctx.moveTo(startX, startY)

      // Control points for the curve
      const controlPointY = (endY - startY) / 2 + startY

      if (Math.abs(curvature) > 0) {
        // Draw curved stream
        ctx.bezierCurveTo(
          startX,
          controlPointY - 50, // First control point
          startX + curvature,
          controlPointY + 50, // Second control point
          startX + curvature * 1.5,
          endY, // End point
        )
      } else {
        // Draw straight stream
        ctx.lineTo(startX, endY)
      }

      ctx.stroke()

      // Draw water droplets for effect
      ctx.fillStyle = "#60A5FA"

      // Add some random droplets along the stream
      const numDroplets = 10
      for (let i = 0; i < numDroplets; i++) {
        const t = i / numDroplets
        const dropletY = startY + t * (endY - startY)

        // Calculate x position along the curve
        let dropletX
        if (Math.abs(curvature) > 0) {
          // Follow the curve
          const t2 = t * t
          const t3 = t2 * t
          const mt = 1 - t
          const mt2 = mt * mt
          const mt3 = mt2 * mt

          // Bezier curve formula
          dropletX =
            startX * mt3 + 3 * startX * mt2 * t + 3 * (startX + curvature) * mt * t2 + (startX + curvature * 1.5) * t3
        } else {
          dropletX = startX
        }

        // Add some randomness to droplet position
        dropletX += (Math.random() - 0.5) * 5

        ctx.beginPath()
        ctx.arc(dropletX, dropletY, 2 + Math.random() * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      drawWaterStream()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [curvature])

  return (
    <div
      className="relative w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-100 to-white border-2 border-blue-300 rounded-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Water source */}
      <div className="absolute top-10 left-[150px] w-10 h-10 bg-blue-700 rounded-b-lg z-10">
        <div className="text-center text-white text-xs mt-2">Agua</div>
      </div>

      {/* Canvas for water stream */}
      <canvas ref={waterStreamRef} width={600} height={400} className="absolute top-0 left-0 w-full h-full" />

      {/* Wool/Hair for rubbing */}
      <motion.div
        className="absolute top-[100px] right-[50px] w-20 h-16 bg-amber-200 rounded-lg"
        animate={
          isRubbing
            ? {
                x: [-5, 5, -5, 5, -5, 0],
                y: [-3, 3, -3, 3, -3, 0],
                transition: { duration: 1.5 },
              }
            : {}
        }
      >
        <div className="w-full h-full relative overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-10 bg-amber-300 rounded-full"
              style={{
                left: `${(i * 7) % 100}%`,
                top: "-2px",
                transform: `rotate(${(i % 5) * 5 - 10}deg)`,
              }}
            />
          ))}
        </div>
        <div className="text-center mt-2 font-medium text-amber-800 text-xs">Lana</div>
      </motion.div>

      {/* Ruler */}
      <motion.div
        ref={rulerRef}
        className={`absolute cursor-grab active:cursor-grabbing w-40 h-10 ${
          rulerCharged ? "bg-yellow-500" : "bg-yellow-400"
        } flex items-center justify-center border border-yellow-700`}
        style={{
          borderRadius: "4px",
        }}
        animate={{
          x: 300 + rulerPosition.x,
          y: 200 + rulerPosition.y,
          scale: rulerCharged ? 1.05 : 1,
          ...(isRubbing
            ? {
                x: [300, 305, 295, 305, 295, 300],
                transition: { duration: 1.5 },
              }
            : {}),
        }}
        drag={!isRubbing}
        dragConstraints={containerRef}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false)
          // Update position once at the end of drag instead of continuously
          if (rulerRef.current) {
            const rect = rulerRef.current.getBoundingClientRect()
            const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 }
            setRulerPosition({
              x: rect.left - containerRect.left - 300,
              y: rect.top - containerRect.top - 200,
            })
          }
        }}
      >
        <div className="h-full w-full flex items-center justify-center relative">
          <div className="text-yellow-800 font-medium">Regla</div>
          {rulerCharged && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <div className="text-yellow-800 font-bold text-2xl">-</div>
              </div>
            </div>
          )}
          {/* Ruler markings */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute h-3 w-0.5 bg-yellow-700" style={{ left: `${(i + 1) * 12.5}%`, top: 0 }} />
          ))}
        </div>
      </motion.div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={chargeRuler}
          disabled={rulerCharged || isRubbing}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            rulerCharged || isRubbing
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Frotar Regla con Lana
        </button>
        <button
          onClick={resetSimulation}
          className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Reiniciar
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-md text-xs text-blue-800 max-w-[200px]">
        <p className="font-medium">Instrucciones:</p>
        <ol className="list-decimal list-inside mt-1">
          <li>Haz clic en "Frotar Regla con Lana" para cargarla</li>
          <li>Arrastra la regla cerca del chorro de agua</li>
          <li>¡Observa cómo el chorro de agua se curva hacia la regla!</li>
        </ol>
      </div>
    </div>
  )
}
