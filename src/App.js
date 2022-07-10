import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Mainbar from './Layout/Mainbar';
import Navbar from './Layout/Navbar'


function App() {
  return (
   <Router>
    <Navbar >
      <Routes>
        <Route path='/' element={<Mainbar />} />
      </Routes>
    </Navbar>
   </Router>
  );
}

export default App;
