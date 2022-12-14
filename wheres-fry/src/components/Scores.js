import '../styles/Scores.css';
import { getHighScores, getRecentScores } from '../firebaseFunctions';
import { ScoreForm } from './ScoreForm';
import { ScoresTable } from './ScoresTable';
import { useEffect, useState } from 'react';

export function Scores(props) {
  const [highScores, setHighScores] = useState(null);
  const [recentScores, setRecentScores] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function confirmSubmit() {
    setSubmitted(true);
  }

  // On mount fetches high and recent scores from Firebase and assigns them to state
  useEffect(() => {
    async function fetchScores() {
      const highScores = await getHighScores();
      setHighScores(highScores);

      const recentScores = await getRecentScores();
      setRecentScores(recentScores);
    }
    fetchScores();
    window.scrollTo(0, 0);
  }, [submitted]);

  return (
    <div className="scores-wrapper">
      <div className="scores-main">
        {props.totalTime && props.submitted === false ? (
          <ScoreForm
            submitted={submitted}
            confirmSubmit={confirmSubmit}
            totalTime={props.totalTime}
            markSubmitted={props.markSubmitted}
          />
        ) : null}

        {submitted ? (
          <div className="submitted-msg">
            Your score has been submitted to the leaderboard!
          </div>
        ) : null}

        <div className="scores-tables">
          {highScores ? (
            <ScoresTable title={'High Scores'} scores={highScores} />
          ) : null}
          {recentScores ? (
            <ScoresTable title={'Recent Scores'} scores={recentScores} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
