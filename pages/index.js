import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aldy Satria Gumilar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="My Image" className={styles.headlogo} />
        <h1 className={styles.title}>
          Hi! I'am <a href="https://github.com/aldyHelix">Aldy Satria Gumilar!</a>
        </h1>

        <p className={styles.description}>
          Get started by my{' '}
          <code className={styles.code}>portofolios</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
