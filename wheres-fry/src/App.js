import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Puzzle } from './components/Puzzle';
import { Home } from './components/Home';
import './App.css';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [showSelect, setShowSelect] = useState(false);
  const [selectLeft, setSelectLeft] = useState(null);
  const [selectTop, setSelectTop] = useState(null);

  function logCoords(event) {
    console.log(
      `X: ${event.nativeEvent.offsetX}, Y: ${event.nativeEvent.offsetY}`
    );
    console.log(
      `XScreen: ${event.nativeEvent.clientX}, YScreen ${event.nativeEvent.clientY}`
    );
    if (showSelect) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
    setSelectLeft(0 + event.nativeEvent.offsetX - 55);
    setSelectTop(-1091 + event.nativeEvent.offsetY - 55);
  }

  function logCharacter(event) {
    console.log(event.nativeEvent.target.innerText);
  }

  return (
    <div className="wrapper">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="puzzle"
          element={
            <Puzzle
              logCoords={logCoords}
              boxLeft={selectLeft}
              boxTop={selectTop}
              showSelect={showSelect}
              logCharacter={logCharacter}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
