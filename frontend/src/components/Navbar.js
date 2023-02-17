import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <header>
			<div className='container'>
				<div className='container-left'>
					<Link to='/' className='link-title'>
						RoundRobin
					</Link>
				</div>
				<div className='container-right'>
					<Link to='/' className='link-item'>
						tables
					</Link>
					<Link to='/table-form' className='link-item'>
						create
					</Link>
				</div>
			</div>
    </header>
  )
}

export default Navbar