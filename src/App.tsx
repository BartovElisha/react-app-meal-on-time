import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <> {/*React.Fragment short form*/}
      <Header />
      {/* <Header></Header> */}
      <Home />
    </>
  );
}

export default App;
