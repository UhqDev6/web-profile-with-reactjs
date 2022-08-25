
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import { Blog } from './pages/Blog/Blog';
import { Contact } from './pages/Contact/Contact';
import { BlogDetail } from './pages/BlogDetail/BlogDetail';


function App() {
  return (
    <div className="app">
      <div className="brand">
        <h1>My Profile</h1>
      </div>
      <nav className='nav'>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/profile" className="nav-item">Profile</Link>
            <Link to="/blog" className="nav-item">Blog</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='blog/:id' element={<BlogDetail/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
