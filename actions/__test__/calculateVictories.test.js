import calculateVictories from '../calculateVictories'

describe('Actions::calculateVictories', ()=>{
    let playerPool = [1, 2, 3]
    let oppPool = [9]

  it('should return 1 victory given opposing die pools', ()=>{
      expect(calculateVictories(playerPool, oppPool)).toBe(1)
    })

    it('should return zero victories given there are no dice in both the player pool and the opposing pool', ()=>{
      playerPool = []      
      oppPool = []
      expect(calculateVictories(playerPool, oppPool)).toBe(0)
    })

  it('should return zero victories given a draw', ()=>{
    playerPool = [1]
    oppPool = [1]
    expect(calculateVictories(playerPool, oppPool)).toBe(0)
    playerPool = [1, 2, 3]
    oppPool = [1, 2, 3]
    expect(calculateVictories(playerPool, oppPool)).toBe(0)
  })
  it('should return number of victories given opposing die pools', ()=>{
      playerPool = [10, 10, 4, 3]
      oppPool = [10, 9, 3,]
      expect(calculateVictories(playerPool, oppPool)).toBe(1)
    })
  it('should return number of victories given opposing die pools', ()=>{
    playerPool = [2, 10, 6]
    oppPool = [2, 10, 2]
    expect(calculateVictories(playerPool, oppPool)).toBe(1)
  })
})