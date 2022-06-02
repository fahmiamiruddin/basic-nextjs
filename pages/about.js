import { useRouter } from "next/router"
import Head from 'next/head'
import styles from '@styles/Home.module.css'

const About = () => {
  const router = useRouter();

  const { query } = router;
  return (
    <div className={styles.main}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
        <meta name="author" content="Fahmi Amiruddin Nafi"/>
      </Head>

      <h3>About Me</h3>
      <p>nama: {query.name}</p>
      <p>alamat: {query.address}</p>
    </div>
  )
}

export default About