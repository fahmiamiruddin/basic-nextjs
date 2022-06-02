import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '@styles/Home.module.css'

const MealDetail = dynamic(() => import('@components/MealDetail'))

const Meal = ({data}) => {
  const meal = data.meals[0];
  return (
    <div className={styles.main}>
      <Head>
        <title>{meal.strMeal}</title>
        <meta name="description" content="Fetch with SSR" />
      </Head>
      <h3>Detail Makanan</h3>
      <p>Fetch with SSR</p>
      {
        meal ? (
          <MealDetail data={meal} />
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default Meal

export async function getServerSideProps(ctx) {
  const id = ctx.params.id
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}
