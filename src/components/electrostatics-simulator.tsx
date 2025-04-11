"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function ElectrostaticsSimulator() {
  const [balloonCharged, setBalloonCharged] = useState(false)
  const [balloonPosition, setBalloonPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [paperPieces, setPaperPieces] = useState([
    { id: 1, x: 100, y: 350, attracted: false },
    { id: 2, x: 200, y: 370, attracted: false },
    { id: 3, x: 300, y: 350, attracted: false },
    { id: 4, x: 150, y: 380, attracted: false },
    { id: 5, x: 250, y: 360, attracted: false },
  ])

  const containerRef = useRef<HTMLDivElement>(null)
  const balloonRef = useRef<HTMLDivElement>(null)

  // Reset the simulation
  const resetSimulation = () => {
    setBalloonCharged(false)
    setBalloonPosition({ x: 0, y: 0 })
    setPaperPieces([
      { id: 1, x: 100, y: 350, attracted: false },
      { id: 2, x: 200, y: 370, attracted: false },
      { id: 3, x: 300, y: 350, attracted: false },
      { id: 4, x: 150, y: 380, attracted: false },
      { id: 5, x: 250, y: 360, attracted: false },
    ])
  }

  // Charge the balloon by rubbing it against hair
  const chargeBalloon = () => {
    setBalloonCharged(true)
  }

  // Update paper pieces based on balloon position
  useEffect(() => {
    if (!balloonCharged || !balloonRef.current || isDragging) return

    const balloonRect = balloonRef.current.getBoundingClientRect()
    const balloonCenterX = balloonRect.left + balloonRect.width / 2
    const balloonCenterY = balloonRect.top + balloonRect.height / 2

    setPaperPieces((pieces) =>
      pieces.map((piece) => {
        // Calculate distance between balloon and paper piece
        const dx = balloonCenterX - (piece.x + (containerRef.current?.getBoundingClientRect().left || 0))
        const dy = balloonCenterY - (piece.y + (containerRef.current?.getBoundingClientRect().top || 0))
        const distance = Math.sqrt(dx * dx + dy * dy)

        // If balloon is close enough, attract the paper
        const attracted = distance < 150

        // If attracted, calculate new position moving toward balloon
        if (attracted) {
          const strength = (1 - Math.min(distance, 150) / 150) * 2
          return {
            ...piece,
            attracted,
            x: piece.x + dx * 0.05 * strength,
            y: piece.y + dy * 0.05 * strength,
          }
        }

        return { ...piece, attracted }
      }),
    )
  }, [balloonCharged, isDragging])

  return (
    <div
      className="relative w-full max-w-3xl h-[400px] bg-gradient-to-b from-blue-100 to-white border-2 border-blue-300 rounded-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Hair */}
      <div className="absolute top-10 left-10">
        <div className="w-40 h-60 bg-amber-700 rounded-t-full flex flex-col items-center justify-start overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-40 bg-amber-800 rounded-full"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: "-10px",
                  transform: `rotate(${(i % 5) * 5 - 10}deg)`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-2 font-medium text-blue-700">Cabello</div>
      </div>

      {/* Balloon */}
      <motion.div
        ref={balloonRef}
        className={`absolute cursor-grab active:cursor-grabbing w-32 h-40 rounded-full flex items-center justify-center ${
          balloonCharged ? "bg-red-500" : "bg-red-400"
        }`}
        style={{
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        }}
        animate={{
          x: 200 + balloonPosition.x,
          y: 100 + balloonPosition.y,
          scale: balloonCharged ? 1.05 : 1,
        }}
        drag={true}
        dragConstraints={containerRef}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false)
          // Update position once at the end of drag instead of continuously
          if (balloonRef.current) {
            const rect = balloonRef.current.getBoundingClientRect()
            const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 }
            setBalloonPosition({
              x: rect.left - containerRect.left - 200,
              y: rect.top - containerRect.top - 100,
            })
          }
        }}
        // Remove the onDrag handler that was causing the infinite update loop
      >
        {balloonCharged && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <div className="text-red-500 font-bold text-2xl">-</div>
            </div>
          </div>
        )}
      </motion.div>
      <div className="absolute text-center font-medium text-blue-700" style={{ top: "150px", left: "230px" }}>
        Globo
      </div>

      {/* Paper pieces */}
      {paperPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-10 h-6 ${piece.attracted ? "bg-yellow-100" : "bg-yellow-50"} border border-yellow-200 rotate-3`}
          animate={{
            x: piece.x,
            y: piece.y,
            rotate: piece.attracted ? 45 : Math.random() * 10 - 5,
          }}
        />
      ))}
      <div className="absolute text-center font-medium text-blue-700" style={{ top: "330px", left: "200px" }}>
        Trozos de Papel (Neutros)
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={chargeBalloon}
          disabled={balloonCharged}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            balloonCharged ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Frotar Globo
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
          <li>Haz clic en "Frotar Globo" para cargarlo</li>
          <li>Arrastra el globo cerca de los trozos de papel</li>
          <li>¡Observa el efecto de atracción!</li>
        </ol>
      </div>
    </div>
  )
}
