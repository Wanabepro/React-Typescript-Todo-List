import React from 'react';
import Navbar from './components/Navbar';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <section className='container'>
          <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/' element={<TodoPage />} />
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App;
