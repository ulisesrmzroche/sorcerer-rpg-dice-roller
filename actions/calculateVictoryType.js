const calculateVictoryType = (victories = 1, diePool = 10) => {
  switch (true) {
    case victories === 0:
      return 'Draw'
    case victories === 1:
      return 'Close Win'
    case victories > 1 && victories < 4:
      return 'Solid Win'
    case victories >= 4 && victories < diePool:
      return 'Total Domination'
    case (victories === diePool):
      return 'Total Victory'
  }
}

export default calculateVictoryType