
import {FaMapMarkerAlt} from 'react-icons/fa'
function Card() {
    return (
        <div className="container">
            <div className="card--image">
                <img src={`https://source.unsplash.com/WLxQvbMyfas`} />
            </div>
            
            <div className="description">
                <div className="card--place">
                    <FaMapMarkerAlt className='card--icon'/>
                    <h4 className="card--title">JAPAN</h4>
                    <a className="card--link">View on Google Map</a>
                </div>
                <h1 className='card--heading'>Mount Fuji</h1>
                <h4 className='card--timeline'>12 Jan, 2021 - 12 Jan, 2021</h4>
                <p className='card--description'>
                "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                Mount Fuji is the single most popular tourist site 
                in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )
}

export default Card;