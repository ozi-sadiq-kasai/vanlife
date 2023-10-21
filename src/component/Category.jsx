import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import CategoryItem from "./CategoryItem"

const Category = () => {
 const {products}=useContext(ProductContext)
 // const filteredProducts = products.a
  return (
    <section className="border-4 w-full ">
      <div className="container mx-auto border-2 bg-red-400">
       <CategoryItem products={products}/>
      </div>
    </section>
  )
}
export default Category