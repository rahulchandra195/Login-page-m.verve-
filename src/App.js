import React from 'react';
import './App.css';
import DesktopMode from './login/DesktopMode/DesktopMode';
import MobileMode from './login/MobileMode/MobileMode';

function App() {
  return (
    <div className="App">
      <DesktopMode/>
      <MobileMode/>
    </div>
  );
}

export default App;
