import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sorcerer RPG Die Roller
        </h1>
        <small>by @ulisesrmzroche</small>

        <p className={styles.description}>
          This is a Die Roller for the Sorcerer RPG by Ron Edwards
        </p>

        <div className={styles.grid}>
          <Link href="/games/new" className={styles.card}>
            New Game
          </Link>
          <Link href="/games" className={styles.card}>
            Load Game
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
