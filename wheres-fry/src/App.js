import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Puzzle } from './components/Puzzle';
import { Home } from './components/Home';
import './App.css';
import { isTagCorrect } from './gameLogic';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [clickedX, setClickedX] = useState(null);
  const [clickedY, setClickedY] = useState(null);
  const [showSelect, setShowSelect] = useState(false);
  const [selectLeft, setSelectLeft] = useState(null);
  const [selectTop, setSelectTop] = useState(null);

  function logCoords(event) {
    setClickedX(event.nativeEvent.offsetX);
    setClickedY(event.nativeEvent.offsetY);

    if (showSelect) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
    setSelectLeft(0 + event.nativeEvent.offsetX - 55);
    setSelectTop(-1091 + event.nativeEvent.offsetY - 55);
  }

  async function tag(event) {
    const correct = await isTagCorrect(clickedX, clickedY, event.target.value);
    console.log(correct);
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
              tag={tag}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
