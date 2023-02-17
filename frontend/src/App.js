import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
