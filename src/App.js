import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import FeedContent from './components/FeedContent';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Mainbar from './Layout/Mainbar';
import Navbar from './Layout/Navbar'


function App() {
  return (
   <Router>
    <Navbar >
      <Routes>
        <Route path='/' element={<Mainbar />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feeds/:id' element={<FeedContent/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Navbar>
   </Router>
  );
}

export default App;
