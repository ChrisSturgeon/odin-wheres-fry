import '../styles/NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Help } from './Help';
import { Timer } from './Timer';
import { Counter } from './Counter';

export function NavBar(props) {
  const [helpBar, setHelpBar] = useState(false);

  // Displays help bar on counter button click, cancelling selection box if active to avoid overlap.
  function toggleHelp() {
    if (helpBar) {
      setHelpBar(false);
    } else if (helpBar === false) {
      props.cancelSelect();
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
