import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/Home.module.css'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Meals Data Fetching NextJS</title>
        <meta name="description" content="Data Fetching NextJS" />
      </Head>

      <main className={styles.main}>
        <p>Data Fetching in NextJS</p>

        <div className={styles.grid}>
          <Link href='/meals/csr'>
            <div className={styles.card}>
              <h2>CSR &rarr;</h2>
              <p>Contoh Penggunaan CSR <br></br>Client Side Rendering</p>
            </div>
          </Link>

          <Link href='/meals/ssr'>
            <div className={styles.card}>
              <h2 className={styles.cardp}>SSR &rarr;</h2>
              <p>Server Side Rendering <br></br>+ detail page with Dynamic Route</p>
            </div>
          </Link>

          <Link href='/meals/ssg'>
            <div className={styles.card}>
              <h2>SSG &rarr;</h2>
              <p>Static Site Generation <br></br>+ detail page with Dynamic Route</p>
            </div>
          </Link>

          <Link href='/meals/isr'>
            <div className={styles.card}>
              <h2 className='cardh2'>ISR &rarr;</h2>
              <p>Contoh Penggunaan ISR <br></br>Incremental Static Regeneration</p>
            </div>
          </Link>
          <style jsx>
            {
              `
                .cardh2 {
                  font-family: Courier New
                }
              `
            }
          </style>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
