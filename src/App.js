import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import FeedContent from './components/FeedContent';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Mainbar from './Layout/Mainbar';
import Navbar from './Layout/Navbar';
import Home from './Layout/Home';



function App() {
  return (
   <Router>
    <Navbar >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Mainbar />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts/:id' element={<FeedContent/>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Navbar>
   </Router>
  );
}

export default App;
