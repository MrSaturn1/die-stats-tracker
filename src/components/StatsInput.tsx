import React, { useState, useEffect } from 'react'
import styles from './StatsInput.module.css'

interface StatsInputProps {
  onSubmit: (stats: any) => void
  selectedPlayer: number
}

const StatsInput: React.FC<StatsInputProps> = ({ onSubmit, selectedPlayer }) => {
  const [hit, setHit] = useState(false)
  const [score, setScore] = useState(0)
  const [defender, setDefender] = useState<number | null>(null)
  const [catchDifficulty, setCatchDifficulty] = useState(0)

  const handleSubmit = () => {
    onSubmit({ hit, score, defender, catchDifficulty })
  }

  const toggleScore = () => {
    setScore((prevScore) => (prevScore + 1) % 4)
  }

  const defenderButtons = selectedPlayer <= 2 ? [3, 4] : [1, 2]

  useEffect(() => {
    if (score === 0) {
      setDefender(null)
    }
  }, [score])

  return (
    <div className={styles.container}>
      <div className={styles.buttonGrid}>
        <button
          className={`${styles.button} ${hit ? styles.hitButtonActive : styles.hitButton}`}
          onClick={() => setHit(!hit)}
        >
          Hit
        </button>
        <button
          className={`${styles.button} ${score > 0 ? styles.scoreButtonActive : styles.scoreButton}`}
          onClick={toggleScore}
        >
          Score
          {score > 0 && (
            <span className={styles.scoreIndicator}>
              {score}
            </span>
          )}
        </button>
      </div>
      <div className={styles.buttonGrid}>
        {defenderButtons.map((player) => (
          <button
            key={player}
            className={`${styles.button} ${
              defender === player
                ? styles.defenderButtonActive
                : score > 0
                ? styles.defenderButtonScored
                : styles.defenderButton
            }`}
            onClick={() => setDefender(player)}
          >
            P{player}
          </button>
        ))}
      </div>
      <div className={styles.catchDifficultyContainer}>
        <span className={styles.catchDifficultyLabel}>Catch Difficulty:</span>
        <div className={styles.catchDifficultyBar}>
          {[1, 2, 3].map((star) => (
            <button
              key={star}
              className={`${styles.catchDifficultySegment} ${
                catchDifficulty >= star ? styles.catchDifficultySegmentActive : ''
              }`}
              onClick={() => setCatchDifficulty(star)}
            />
          ))}
        </div>
      </div>
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default StatsInput