import './App.css';
import { Nav } from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { BookingPage } from './components/BookingPage/BookingPage';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
