import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Puzzle } from './components/Puzzle';
import { Home } from './components/Home';
import { Scores } from './components/Scores';
import './App.css';
import { isTagCorrect } from './gameLogic';

import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [tagged, setTagged] = useState([]);
  const [clickedX, setClickedX] = useState(null);
  const [clickedY, setClickedY] = useState(null);
  const [showSelect, setShowSelect] = useState(false);
  const [tagResult, setTagResult] = useState(null);
  const [resultsText, setResultsText] = useState('');
  const [selectLeft, setSelectLeft] = useState(null);
  const [selectTop, setSelectTop] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [timerActive, setTimerActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      markCorrect();
    } else {
      markWrong();
    }
  }

  // Marks finder box as correct for 1.5 seconds
  function markCorrect() {
    setTagResult(true);
    setResultsText('Correct!');
    setTimeout(() => {
      setTagResult(null);
    }, 1500);
  }

  // Marks finder box as incorrect for 1.5 seconds
  function markWrong() {
    setTagResult(false);
    setResultsText('Wrong!');
    setTimeout(() => {
      setTagResult(null);
    }, 1500);
  }

  function startPuzzle() {
    resetPuzzle();
    setStartTime(new Date());
    setTimerActive(true);
  }

  function resetPuzzle() {
    setStartTime(null);
    setTagResult(null);
    setTimerActive(false);
    setTagged([]);
    setShowSelect(false);
    setSubmitted(false);
    setTotalTime(null);
  }

  function puzzleComplete() {
    setTotalTime(Math.round((new Date() - startTime) / 1000));
    setTimerActive(false);
    navigate('/scores');
  }

  function markSubmitted() {
    setSubmitted(true);
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
        startTime={startTime}
        totalTime={totalTime}
        count={tagged.length}
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
              tagResult={tagResult}
              resultsText={resultsText}
              tag={tag}
            />
          }
        ></Route>
        <Route
          path="/scores"
          element={
            <Scores
              totalTime={totalTime}
              submitted={submitted}
              markSubmitted={markSubmitted}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
