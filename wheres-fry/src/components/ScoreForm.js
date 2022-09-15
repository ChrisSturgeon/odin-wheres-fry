import '../styles/ScoresForm.css';
import { useState } from 'react';
import { submitScore } from '../firebaseFunctions';

export function ScoreForm(props) {
  const [name, setName] = useState('');
  const minutes = Math.floor(props.totalTime / 60);
  const seconds = props.totalTime - minutes * 60;

  // Calls submit scores and name firebase function upon form submit.
  async function onSubmit(event) {
    event.preventDefault();
    if (name.length > 0) {
      submitScore(props.totalTime, name);
      props.confirmSubmit();
      props.markSubmitted();
    }
  }

  // Updates name state on with input change
  function nameChange(event) {
    if (event.target.value.length <= 20) {
      setName(event.target.value);
    }
  }

  return (
    <div className="submission">
      {minutes > 0 ? (
        <p>
          Your time was {minutes} minutes and {seconds} seconds!
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
