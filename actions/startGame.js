const loadGames = (uuid) => {
  if (typeof window === 'undefined') return false
  const App = localStorage.getItem('__SORCERER_RPG_DIE_ROLLER__')
  const app = JSON.parse(App)
  if (app && app.game && app.game.uuid === uuid) {
    return app.game
  }
  console.log('no games')
}

export default loadGames