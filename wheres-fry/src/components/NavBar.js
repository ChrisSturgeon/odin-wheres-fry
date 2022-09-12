import { useState } from 'react';
import { Timer } from '../components/Timer';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  return (
    <div className="nav-bar">
      {props.timerActive ? (
        <Timer startTime={props.startTime} totalTime={props.totalTime} />
      ) : (
        <button>
          <Link to="puzzle">Play</Link>
        </button>
      )}
      <button onClick={props.resetPuzzle} id="homeBtn">
        <Link to="/">Where's Fry?</Link>
      </button>
      <p>Help</p>
      <button>
        <Link to="scoreboard">Scoreboard</Link>
      </button>
    </div>
  );
}
