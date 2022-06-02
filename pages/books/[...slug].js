import { useRouter } from "next/router"
import Head from 'next/head'
import styles from '@styles/Home.module.css'

const Books = () => {
  const router = useRouter();

  const { query } = router;

  return (
    <div className={styles.main}>
      <Head>
        <title>{query.slug[1]}</title>
        <meta name="description" content={query.slug[1]} />
      </Head>

      <h3>Detail Buku</h3>
      <p>judul: {query.slug[1]}</p>
      <p>kategori: {query.slug[0]}</p>
      <p>pengarang: {query.slug[2]}</p>
    </div>
  )
}

export default Books