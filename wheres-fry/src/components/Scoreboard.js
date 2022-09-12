import { ScoreForm } from './ScoreForm';

export function Scoreboard(props) {
  return (
    <div>
      {props.totalTime ? <ScoreForm totalTime={props.totalTime} /> : null}
    </div>
  );
}
