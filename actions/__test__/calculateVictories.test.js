import calculateVictories from '../calculateVictories'

describe('Actions::calculateVictories', ()=>{
  let playerPool = [1, 2, 3]
  let oppPool = [9]
  it('should return number of victories given opposing die pools', ()=>{
    expect(calculateVictories(playerPool, oppPool)).toBe(1)
  })
  it('should return number of victories given opposing die pools', ()=>{
    playerPool = [1]
    oppPool = [1]
    expect(calculateVictories(playerPool, oppPool)).toBe(0)
  })
  it('should return number of victories given opposing die pools', ()=>{
    playerPool = [10, 10, 4, 3]
    oppPool = [10, 9, 3,]
    expect(calculateVictories(playerPool, oppPool)).toBe(0)
  })
})