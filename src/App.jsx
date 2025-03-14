import React from 'react'
import './App.scss'
import {Home} from './pages/home/Home.jsx'
import { Navbar, Main, Footer} from './components';

function App() {
  return (
    <div>
    <Navbar />
    <Main>
      <Home />
    </Main>
    <Footer />
    </div>
  );
}

export default App