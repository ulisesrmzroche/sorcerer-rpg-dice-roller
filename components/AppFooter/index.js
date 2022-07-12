import styles from './style.module.css'

const AppFooter = () => {
  return (
    <footer className={styles.appFooter}>
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column">
            <nav className={styles.nav}>
              <a href="https://ulisesrmzroche.info">App by @ulisesrmzroche</a>
              <a href="https://adeptplay.com/content/sorcerer">Game by Ron Edwards</a>
            </nav>
          </div>
          <div className="column">
            <nav className={styles.nav}>
              <a href="https://github.com/ulisesrmzroche/sorcerer-rpg-dice-roller">View Source on Github</a>
              <a href="https://github.com/ulisesrmzroche/sorcerer-rpg-dice-roller/issues/new">File a Bug Report</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
