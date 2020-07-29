const calculateVictoryType = (victories = 1, diePool = 10) => {
  console.log(victories, diePool)
  if (victories === 0) return 'Draw'
  if (victories === diePool.length) return 'Total Victory'
  if (victories === 1) return 'Close Win'
  if (victories === 2 || victories === 3) return 'Solid Win'
  if (victories >= 4) return 'Total Domination'
  return null
}

export default calculateVictoryType