import logo from '../assets/logo.png'

function Navbar() {
    return (
        <nav>
            <img src={logo} className="img--logo"/>
            <p className='nav--text'>my travel journal</p>
        </nav>
    )
}

export default Navbar;