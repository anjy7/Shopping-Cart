import './App.css'
import {
  BrowserRouter as Router,
 Route,
  Routes
} from "react-router-dom";
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Checkout from './components/Checkout';


function App() {

  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default App
