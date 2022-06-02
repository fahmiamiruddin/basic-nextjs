import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'

const Isr = ({data}) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Fetch with ISR</title>
        <meta name="description" content="Fetch with ISR" />
      </Head>
      <h3>Daftar Makanan</h3>
      <p>Fetch with ISR</p>
      {
        data.meals && data.meals.length > 0 ? (
          <div className={styles.containercard}>
            {
              data.meals.map(meal => (
                <div to={`/meal/${meal.idMeal}`} key={meal.idMeal} className={styles.cardku}>
                  <Image width='100px' height='100px' src={meal.strMealThumb} alt={meal.strMeal} />
                  <p style={{borderTop:'1px solid black', padding:'3px'}}>&#127858; {meal.strMeal}</p>
                </div>
              ))
            }
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default Isr

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