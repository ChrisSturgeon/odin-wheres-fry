import { useState } from 'react';
import { Help } from './Help';
import { Timer } from '../components/Timer';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  const [helpBar, setHelpBar] = useState(false);

  function toggleHelp() {
    if (helpBar) {
      setHelpBar(false);
    } else {
      setHelpBar(true);
    }
  }

  return (
    <div className="nav-bar">
      <div className="nav-bar-top">
        {props.timerActive ? (
          <Timer startTime={props.startTime} totalTime={props.totalTime} />
        ) : (
          <button className="play-btn">
            <Link to="puzzle">Play</Link>
          </button>
        )}
        <button onClick={props.resetPuzzle} id="homeBtn">
          <Link className="title" to="/">
            Where's Fry?
          </Link>
        </button>
        {props.timerActive ? (
          <button onClick={toggleHelp}>{3 - props.count}</button>
        ) : null}

        {props.timerActive ? null : (
          <button>
            <Link to="scores">Scores</Link>
          </button>
        )}
      </div>
      {helpBar ? <Help /> : null}
    </div>
  );
}
