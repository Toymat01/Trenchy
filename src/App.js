import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
      </Routes>
    </Navbar>
   </Router>
  );
}

export default App;
