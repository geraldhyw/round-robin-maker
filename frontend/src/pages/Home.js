import '../css/Home.css'
import TableCard from '../components/TableCard'

const Home = () => {
  return (
		<div>
		<div className="home-header">
			<h2>Tables</h2>
		</div>

		<div className="home-body">
			<TableCard />
			<button></button>
		</div>
		</div>
  )
}

export default Home