import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Faq from './components/Faq';
import Features from './components/Features';
import Footers from './components/Footers';
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className='bg-blue-50'>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <Pricing />
              <Testimonial />
              <Faq />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footers/>
      </div>
    </Router>
  );
}

export default App; 
