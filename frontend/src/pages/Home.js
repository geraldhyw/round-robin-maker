import { Link } from 'react-router-dom'
import '../css/Home.css'
import TableCard from '../components/TableCard'
import { useEffect, useState } from 'react'
import { useTablesContext } from '../hooks/useTablesContext'

const Home = () => {
	// const [tables, setTables] = useState([])
	const { tables, dispatch } = useTablesContext()

	useEffect(() => {
		const fetchTables = async () => {
			const response = await fetch('/api/tables')
			const json = await response.json()

			if (response.ok) {
				// setTables(json)
				dispatch({type: 'GET_TABLES', payload: json})
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
						console.log(table)
						return (
							<Link to="/indi-table" state={table} className="plain-link" key={table._id} onClick={(e) => e.stopPropagation()}>
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