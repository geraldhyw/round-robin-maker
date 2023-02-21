import { Link } from 'react-router-dom'
import '../css/Home.css'
import TableCard from '../components/TableCard'

const Home = () => {
  return (
		<div>
			<div className="home-header">
				<h2>Tables</h2>
			</div>

			<div className="home-body">
				<Link to="/indi-table" className="plain-link">
					<TableCard />
				</Link>
				<div className="home-button-container">
					<Link to="/table-form" className="blue-button">
						Add Table
					</Link>
				</div>
			</div>
		</div>
  )
}

export default Home