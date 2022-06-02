import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import ssImg from '../../assets/ss.png'

const Berita = () => {
  const router = useRouter();

  const { query } = router;
  return (
    <div className={styles.main}>
      <Head>
        <title>{query.title}</title>
        <meta name="description" content={query.title} />
        <link rel="icon" href='../../beach.png' />
      </Head>

      <h3>Berita Hari ini</h3>
      <Image src={ssImg} alt="" width={200} height={200} style={{border:'1px solid grey'}}/>
      <p><b>judul: {query.title}</b></p>
      <p>isi: {query.content}</p>
      <p>Img Url: ../../assets/ss.png</p>
    </div>
  )
}

export default Berita