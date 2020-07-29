import { v4 as uuidv4 } from 'uuid';

const createGame = (value) => {
  const App = localStorage.getItem('__SORCERER_RPG_DIE_ROLLER__')
  let app = JSON.parse(App)
  let didStartGame = app && app.game ? true : false
  if (!didStartGame) {
    localStorage.setItem('__SORCERER_RPG_DIE_ROLLER__', JSON.stringify({
      game: {
        uuid: uuidv4(),
        dieSize: value
      }
    }))
    didStartGame = true
    return
  }
  console.log('The Game was already started')
}

export default createGame