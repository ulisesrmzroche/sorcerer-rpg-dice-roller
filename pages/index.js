import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DiceRoller from '../components/DiceRoller'

export default function Home() {
  return (
    <div className="page-home">
      <div className="container">
        <Head>
          <title>Sorcerer RPG Dice Roller</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>

          <div className="column">

          <h1 className={styles.title}>
            Sorcerer RPG Die Roller
          </h1>
          <p className={styles.description}>by @ulisesrmzroche</p>

          <p className={styles.description}>
            This is a Die Roller for the Sorcerer RPG by Ron Edwards
          </p>
          </div>
        </header>

        <main className="columns">

          <div className="column">
            <DiceRoller />
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column">
              <a href="https://ulisesrmzroche.info">Made by @ulisesrmzroche</a>
            </div>
            <div className="column">

              <p className="float-left">This app is Free! But if you like it and want to buy me a coffee: </p>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="A2SEW65Z8N7XL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
            <div className="column">
              <a href="https://github.com/ulisesrmzroche/sorcerer-rpg-dice-roller">View Source on Github</a>
              <a href="https://github.com/ulisesrmzroche/sorcerer-rpg-dice-roller/issues/new">Bug Report</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
