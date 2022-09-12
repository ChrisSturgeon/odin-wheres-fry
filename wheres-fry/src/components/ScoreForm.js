import { useState } from 'react';
import { getHighScores, submitScore } from '../firebaseFunctions';

export function ScoreForm(props) {
  const [score, setScore] = useState(props.totalTime);
  const [name, setName] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    submitScore(score, name);
    props.confirmSubmit();
  }

  function nameChange(event) {
    setName(event.target.value);
  }

  if (props.submitted) {
    return <div>Your score has been submitted to the leaderboard!</div>;
  } else {
    return (
      <div>
        <p>Your time was {props.totalTime} seconds</p>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input onChange={nameChange} value={name} id="name"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
