import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const ssr = ({data}) => {
  return (
    <div className={styles.main}>
      <Head><title>Fetch with ISR</title><meta name="description" content="Fetch with ISR" /></Head>
      <h3>Daftar Makanan</h3>
      <p>Fetch with ISR</p>
      { data.meals  && data.meals.length > 0 ? (data.meals.map((item) => (
        <div key={item.idMeal} style={{ marginTop:'10px', display:'grid', gap:'20px', gridTemplateColumns:'repeat(4, 1fr)', cursor:'pointer' }} >
          <div>
            <Image src={item.strMealThumb} alt="" width={200} height={200}/>
            <p style={{borderTop:'1px solid black', padding:'3px'}}><b>{item.strMeal}</b></p>
            <p>Img Url: {item.strMealThumb}</p>
          </div>
        </div>
      ))) : (<p>Loading . . .</p>) }
    </div>
  )
}

export default ssr

export async function getStaticProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await res.json();;

  return {
    props: {
      data,
      revalidate: 30 //ini ISR tiap 10 detik mengecek perubahan data
    }
  }
}