import styles from './style.module.css'

const BtnPaypalDonate = () => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="A2SEW65Z8N7XL" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}

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
          <div className="column">
            <p className="float-left">This app is Free! But if you like it and want to help pay for upkeep costs: </p>
            <BtnPaypalDonate />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter