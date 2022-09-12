import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Puzzle } from './components/Puzzle';
import { Home } from './components/Home';
import { Scoreboard } from './components/Scoreboard';
import './App.css';
import { isTagCorrect } from './gameLogic';

import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [tagged, setTagged] = useState([]);
  const [clickedX, setClickedX] = useState(null);
  const [clickedY, setClickedY] = useState(null);
  const [showSelect, setShowSelect] = useState(false);
  const [selectLeft, setSelectLeft] = useState(null);
  const [selectTop, setSelectTop] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [timerActive, setTimerActive] = useState(false);

  const navigate = useNavigate();

  // Receives coordinates of mouseclick and updates their states, showing box
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

  // Calculates if a tag is valid or not
  async function tag(event) {
    const character = event.target.value;
    const correct = await isTagCorrect(clickedX, clickedY, character);
    if (correct && !tagged.includes(character)) {
      setTagged((prevTagged) => prevTagged.concat(character));
    } else {
      console.log('not correct');
    }
  }

  function startPuzzle() {
    resetPuzzle();
    setStartTime(new Date());
    setTimerActive(true);
  }

  function resetPuzzle() {
    setStartTime(null);
    setTimerActive(false);
    setTagged([]);
  }

  function puzzleComplete() {
    setTotalTime(Math.round((new Date() - startTime) / 1000));
    setTimerActive(false);
    navigate('/scoreboard');
  }

  function checkStartTime() {
    console.log(startTime);
    const now = new Date();
    console.log((now - startTime) / 1000);
  }

  // Console logs total finish time
  useEffect(() => {
    console.log(`${totalTime} seconds`);
  }, [totalTime]);

  // Calculates if player has tagged all three characters
  useEffect(() => {
    console.log(tagged);
    if (tagged.length === 3) {
      puzzleComplete();
    }
  }, [tagged]);

  return (
    <div className="wrapper">
      <NavBar
        timerActive={timerActive}
        resetPuzzle={resetPuzzle}
        checkStartTime={checkStartTime}
        startTime={startTime}
        totalTime={totalTime}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="puzzle"
          element={
            <Puzzle
              startPuzzle={startPuzzle}
              logCoords={logCoords}
              boxLeft={selectLeft}
              boxTop={selectTop}
              showSelect={showSelect}
              tag={tag}
            />
          }
        ></Route>
        <Route
          path="/scoreboard"
          element={<Scoreboard totalTime={totalTime} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
