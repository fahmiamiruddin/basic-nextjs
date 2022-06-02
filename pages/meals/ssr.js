import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const ssr = ({data}) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Fetch with SSR</title>
        <meta name="description" content="Fetch with SSR" />
      </Head>
      <h3>Daftar Makanan</h3>
      <p>Fetch with SSR</p>
      {
        data.meals && data.meals.length > 0 ? (
          <div className={styles.containercard}>
            {
              data.meals.map(meal => (
                <Link href={{pathname:`/meals/detail-ssr/${meal.idMeal}`}} key={meal.idMeal}>
                  <div className={styles.cardku}>
                    <Image width='100px' height='100px' src={meal.strMealThumb} alt={meal.strMeal} />
                    <p style={{borderTop:'1px solid black', padding:'3px'}}>&#127858; {meal.strMeal}</p>
                  </div>
                </Link>
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

export default ssr

export async function getServerSideProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}