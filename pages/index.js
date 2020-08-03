import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DiceRoller from '../components/DiceRoller'
import AppFooter from '../components/AppFooter'
export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>Sorcerer RPG Dice Roller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <header>

          <div className="column">

          <h1 className="title is-2">
            Sorcerer RPG Die Roller
          </h1>

          </div>
        </header>

        <main className="columns">
          <div className="column">
            <DiceRoller />
          </div>
        </main>
      </div>
      <AppFooter />
    </div>
  )
}
