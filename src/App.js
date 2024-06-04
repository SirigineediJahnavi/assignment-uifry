// src/App.js
import React from 'react';
import Header from './components/Header'; // Assuming Header is in a components directory
import Firstpage from './components/Firstpage'
import Secondpage from './components/Secondpage'
import Thirdpage from './components/Thirdpage'
import Fourthpage from './components/Fourthpage'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Firstpage/>
      <Secondpage/>
      <Thirdpage/>
      <Fourthpage/>
    </div>
  );
};

export default App;
