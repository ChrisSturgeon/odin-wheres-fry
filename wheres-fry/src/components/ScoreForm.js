import { useState } from 'react';
import { submitScore } from '../firebaseFunctions';

export function ScoreForm(props) {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(props.totalTime);
  const [name, setName] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    submitScore(score, name);
    setSubmitted(true);
  }

  function nameChange(event) {
    setName(event.target.value);
  }

  if (submitted) {
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
