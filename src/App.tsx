import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Page2 from './pages/Page 2/Page2';
import Page3 from './pages/Page 3/Page3';

function App() {
  return (
    <> 
      <Header />  {/*React.Fragment short form*/}
      {/* <Header></Header> */}
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/page2"
          element={<Page2 />}
        />
        <Route 
          path="/page3"
          element={<Page3 />}
        />
      </Routes>      
    </>
  );
}

export default App;
