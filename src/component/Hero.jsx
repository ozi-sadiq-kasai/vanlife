import { hero } from "../../data"
const Hero = () => {
  return (
    <div className="w-full ">
      <img
        src={hero}
        alt="books background image"
        className="w-full object-fill h-80"
      />
    </div>
  )
}
export default Hero