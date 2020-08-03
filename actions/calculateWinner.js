const calculateWinner = (playerRoll, oppRoll) => {
  if (!playerRoll.length && !oppRoll.length) return null
  if (playerRoll.length && !oppRoll.length) return 'playerRoll';
  if (!playerRoll.length && oppRoll.length) return 'oppRoll';

  const playerRollMax = Math.max(...playerRoll)
  const oppRollMax = Math.max(...oppRoll)

  if (playerRollMax > oppRollMax) return 'playerRoll'
  if (oppRollMax > playerRollMax) return 'oppRoll'
  if (oppRollMax > playerRollMax) return null

  const isDraw = playerRollMax === oppRollMax
  if (isDraw) {
    playerRoll = playerRoll.filter((e)=>{
      return e !== playerRollMax
    })
    oppRoll = oppRoll.filter((e)=>{
      return e !== oppRollMax
    })
    return calculateWinner(playerRoll, oppRoll)
  }

}

export default calculateWinner