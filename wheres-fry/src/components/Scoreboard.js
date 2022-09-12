import { getHighScores } from '../firebaseFunctions';
import { ScoreForm } from './ScoreForm';
import { Scores } from './Scores';
import { useEffect, useState } from 'react';

export function Scoreboard(props) {
  const [highScores, setHighScores] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function logScores() {
    console.log(Array.isArray(highScores));
  }

  function confirmSubmit() {
    setSubmitted(true);
  }

  // On mount fetches highscores from Firebase and assigns them to highscore state
  useEffect(() => {
    async function fetchScores() {
      const scores = await getHighScores();
      setHighScores(scores);
    }
    fetchScores();
  }, [submitted]);

  return (
    <div>
      {props.totalTime ? (
        <ScoreForm
          submitted={submitted}
          confirmSubmit={confirmSubmit}
          totalTime={props.totalTime}
        />
      ) : null}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {highScores
            ? highScores.map((score) => {
                return (
                  <tr key={score.timestamp}>
                    <td>{score.name}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>

      <button onClick={logScores}>Log Scores</button>
    </div>
  );
}
