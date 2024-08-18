// src/app/game/page.tsx
'use client'

import { useState } from 'react'
import PlayerSelect from '@/components/PlayerSelect'
import StatsInput from '@/components/StatsInput'

export default function Game() {
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)
  const [scores, setScores] = useState([0, 0])

  const handlePlayerSelect = (player: number) => {
    setSelectedPlayer(player)
  }

  const handleStatsSubmit = (stats: any) => {
    // Process stats and update scores
    // For simplicity, let's just increment the score for now
    setScores(prevScores => {
      const newScores = [...prevScores]
      newScores[Math.floor((selectedPlayer! - 1) / 2)] += stats.score
      return newScores
    })
    setSelectedPlayer(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {selectedPlayer === null ? (
        <PlayerSelect onPlayerSelect={handlePlayerSelect} scores={scores} />
      ) : (
        <StatsInput onSubmit={handleStatsSubmit} selectedPlayer={selectedPlayer} />
      )}
    </div>
  )
}