const CategoryItem = ({products}) => {


  return (
    <section>
    { products.map(item => {
  return (
    <div key={item.id}>
      <p>{item.category}</p>
      <img src={item.image} alt="" />
    </div>
  )
 })}
    </section>
  )
}
export default CategoryItem