import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Location, NotFound } from './pages';
import { Footer } from './components';

function App() {
   return (
      <Router>
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/location' element={<Location />} />
            <Route path='*' element={<NotFound />} />
         </Routes>

         <Footer />
      </Router>
   );
}

export default App;
