import React from 'react';

import './App.css';
import Header from './components/Header';
import DisplayArea from './components/DisplayArea';
// import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <DisplayArea />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
