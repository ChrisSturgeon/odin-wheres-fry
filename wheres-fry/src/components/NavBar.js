import { useState } from 'react';
import { Help } from './Help';
import { Timer } from '../components/Timer';
import { Counter } from '../components/Counter';
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
            <Link to="puzzle">
              <i className="fa-solid fa-play"></i>
            </Link>
          </button>
        )}
        <button onClick={props.resetPuzzle} id="homeBtn">
          <Link className="title" to="/">
            Where's Fry?
          </Link>
        </button>
        {props.timerActive ? (
          <Counter
            count={props.count}
            toggleHelp={toggleHelp}
            helpBar={helpBar}
          />
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
