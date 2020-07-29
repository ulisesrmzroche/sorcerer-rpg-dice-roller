const calculateWinner = (playerRoll, oppRoll) => {
  if (!playerRoll.length || !oppRoll.length) {
    console.log('someone ran out of dice')
    if (!playerRoll.length) {
      console.log('player ran out of dice')
      return 'oppRoll'
    }
    if (!oppRoll.length) {
      console.log('opp ran out of dice')
      return 'playerRoll'
    }
    return
  }
  const playerRollMax = Math.max(...playerRoll)
  const oppRollMax = Math.max(...oppRoll)
  if (playerRollMax > oppRollMax) {
    return 'playerRoll'
  } else if (oppRollMax > playerRollMax) {
    return 'oppRoll'
  } else {
    playerRoll.shift()
    oppRoll.shift()
    return calculateWinner(playerRoll, oppRoll)
  }
}

export default calculateWinner