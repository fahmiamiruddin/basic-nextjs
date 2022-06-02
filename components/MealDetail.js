import Image from 'next/image'

const MealDetail = ({data}) => {
  return (
    <div style={{marginTop:'10px', padding:'10px'}}>
      <Image width='500px' height='300px' src={data.strMealThumb} alt={data.strMeal} />
      <h3>&#127858; Nama Makanan : {data.strMeal}</h3>
      <hr/>
      <p>&#127988; asal makanan: {data.strArea}</p>
      <p>&#127860; kategori makanan: {data.strCategory}</p>
      <p>&#128250; turorial masak: <a target="_blank" href={data.strYoutube} className='none'>{data.strYoutube}</a></p>
      <p>&#128279;	sumber: <a target="_blank" href={data.strSource} className='none'>website</a></p>
      <p>&#127859;	cara masak: {data.strInstructions}</p>
    </div>
  )
}

export default MealDetail