import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Meal = ({data}) => {
  const meal = data.meals[0];
  return (
    <div className={styles.main}>
      <Head>
        <title>{meal.strMeal}</title>
        <meta name="description" content="Fetch with SSG" />
      </Head>
      <h3>Detail Makanan</h3>
      <p>Fetch with SSG</p>
      {
        meal ? (
          <div style={{marginTop:'10px', padding:'10px'}}>
            <Image width='500px' height='300px' src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>&#127858; Nama Makanan : {meal.strMeal}</h3>
            <hr/>
            <p>&#127988; asal makanan: {meal.strArea}</p>
            <p>&#127860; kategori makanan: {meal.strCategory}</p>
            <p>&#128250; turorial masak: <a target="_blank" href={meal.strYoutube} className='none'>{meal.strYoutube}</a></p>
            <p>&#128279;	sumber: <a target="_blank" href={meal.strSource} className='none'>website</a></p>
            <p>&#127859;	cara masak: {meal.strInstructions}</p>
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default Meal

export async function getStaticPaths() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await res.json();
  const meals = data.meals;
  const path = meals.map(item => {
    return {
      params: {id: item.idMeal.toString()}
    }
  });

  return {
    paths: path,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

// export async function getServerSideProps(ctx) {
//   const id = ctx.params.id
//   const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
//   const data = await res.json();

//   return {
//     props: {
//       data
//     }
//   }
// }