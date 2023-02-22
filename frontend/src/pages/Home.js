import { Link } from 'react-router-dom'
import '../css/Home.css'
import TableCard from '../components/TableCard'
import { useEffect, useState } from 'react'

const Home = () => {
	const [tables, setTables] = useState([])

	useEffect(() => {
		const fetchTables = async () => {
			const response = await fetch('/api/tables')
			const json = await response.json()

			if (response.ok) {
				setTables(json)
			}
		}

		fetchTables()
	}, [])

  return (
		<div>
			<div className="home-header">
				<h2>Tables</h2>
			</div>

			<div className="home-body">
				{
					tables.map((table) => {
						return (
							<Link to="/indi-table" className="plain-link" key={table._id} onClickCapture={(e) => e.preventDefault()}>
								<TableCard table={table}/>
							</Link>
						)
					})
				}
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