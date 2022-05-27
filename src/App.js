import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrumMachine from "./components/DrumMachine";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/drum-machine' exact element={<DrumMachine/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
