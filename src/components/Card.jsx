
import {FaMapMarkerAlt} from 'react-icons/fa'
function Card(props) {
    return (
        <div className="container">
            <div className="card--image">
                <img src={`${props.image}`} />
            </div>
            
            <div className="description">
                <div className="card--place">
                    <FaMapMarkerAlt className='card--icon'/>
                    <p className="card--title">{props.location}</p>
                    <a className="card--link" href={props.googleLink}>View on Google Map</a>
                </div>
                <h1 className='card--heading'>{props.title}</h1>
                <h4 className='card--timeline'>{props.startDate} - {props.endDate}</h4>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;