import '../styles/ScoresForm.css';

import { useState } from 'react';
import { submitScore } from '../firebaseFunctions';

export function ScoreForm(props) {
  const [score, setScore] = useState(props.totalTime);
  const [name, setName] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    submitScore(score, name);
    props.confirmSubmit();
    props.markSubmitted();
  }

  function nameChange(event) {
    if (event.target.value.length <= 20) {
      setName(event.target.value);
    }
  }

  if (props.submitted) {
    return (
      <div className="submitted-msg">
        Your score has been submitted to the leaderboard!
      </div>
    );
  } else {
    const minutes = Math.floor(props.totalTime / 60);
    const seconds = props.totalTime - minutes * 60;

    return (
      <div className="submission">
        {minutes > 0 ? (
          <p>
            Your time was {minutes} minutes and {seconds}!
          </p>
        ) : (
          <p>Your time was {seconds} seconds!</p>
        )}
        <form onSubmit={onSubmit}>
          <div className="submission-inputs">
            <label htmlFor="name">Your Name</label>
            <input onChange={nameChange} value={name} id="name"></input>
          </div>

          <button type="submit">Add to leaderboard</button>
        </form>
      </div>
    );
  }
}
