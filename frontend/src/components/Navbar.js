import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <header>
			<div className='nav-container'>
				<div className='nav-container-left'>
					<Link to='/' className='nav-link-title'>
						RoundRobin
					</Link>
				</div>
				<div className='nav-container-right'>
					<Link to='/' className='nav-link-item'>
						tables
					</Link>
					<Link to='/table-form' className='nav-link-item'>
						create
					</Link>
				</div>
			</div>
    </header>
  )
}

export default Navbar