import calculateWinner from './calculateWinner'
import calculateVictories from './calculateVictories'

const calculateVictoryType = (winner, victories, diePool) => {
  if (victories === 0) return ''
  if (victories === diePool.length) return 'Total Victory'
  if (victories === 1) return 'Close Win'
  if (victories === 2 || victories === 3) return 'Solid Win'
  if (victories >= 4) return 'Total Domination'
  return null
}

const calculateResult = (dieRolls) => {
  const { playerRoll, oppRoll } = dieRolls
  const winner = calculateWinner(playerRoll, oppRoll)
  const victories = calculateVictories(winner, playerRoll, oppRoll)
  return {
    winner: winner,
    victories: victories,
    victoryType: calculateVictoryType(winner, victories, winner === 'playerRoll' ? playerRoll : oppRoll)
  }
}

export default calculateResult