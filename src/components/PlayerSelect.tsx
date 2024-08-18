// src/components/PlayerSelect.tsx
import React from 'react'

interface PlayerSelectProps {
  onPlayerSelect: (player: number) => void
  scores: number[]
}

const PlayerSelect: React.FC<PlayerSelectProps> = ({ onPlayerSelect, scores }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 border-b-4 border-black">
        <button
          className="w-1/2 bg-blue-500 text-white text-2xl font-bold"
          onClick={() => onPlayerSelect(1)}
        >
          P1
        </button>
        <button
          className="w-1/2 bg-blue-600 text-white text-2xl font-bold"
          onClick={() => onPlayerSelect(2)}
        >
          P2
        </button>
        <div className="w-1/4 flex items-center justify-center bg-gray-200 text-3xl font-bold">
          {scores[0]}
        </div>
      </div>
      <div className="flex flex-1">
        <button
          className="w-1/2 bg-red-500 text-white text-2xl font-bold"
          onClick={() => onPlayerSelect(3)}
        >
          P3
        </button>
        <button
          className="w-1/2 bg-red-600 text-white text-2xl font-bold"
          onClick={() => onPlayerSelect(4)}
        >
          P4
        </button>
        <div className="w-1/4 flex items-center justify-center bg-gray-200 text-3xl font-bold">
          {scores[1]}
        </div>
      </div>
    </div>
  )
}

export default PlayerSelect