import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import About from './components/About';
import Contact from './components/Contact';
import PostDetails from './containers/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <div className="mt-5">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/1" element={<PostDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* TODO: Work on handling 404 */}
          </Routes>

        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
