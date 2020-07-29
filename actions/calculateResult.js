import calculateWinner from './calculateWinner'
import calculateVictories from './calculateVictories'

const calculateResult = (dieRolls) => {
  const { playerRoll, oppRoll } = dieRolls
  return {
    winner: calculateWinner(playerRoll, oppRoll),
    victories: calculateVictories(playerRoll, oppRoll)
  }
}

export default calculateResult