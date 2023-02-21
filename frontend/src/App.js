import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import IndiTable from './pages/IndiTable'
import TableForm from './pages/TableForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/table-form'
            element={<TableForm />}
          />
          <Route 
            path='/indi-table'
            element={<IndiTable />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
