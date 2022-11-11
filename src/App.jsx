import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "../public/data"
export default function App() {

  const placeDetails = data.map((place) => {
    return <Card id = {place.id} {...place} />
  })
  return(
    <section>
      <Navbar />
      <div className="item">
          {placeDetails}
      </div>
    </section>
  )
}