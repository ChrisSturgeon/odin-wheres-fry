import cast from '../imgs/cast.jpeg';
import '../styles/Puzzle.css';

export function Puzzle(props) {
  const boxX = props.boxX;

  return (
    <div className="puzzle">
      <img onClick={props.logCoords} src={cast} alt="Futurama Cast" />
      <div
        style={{ left: props.boxLeft, top: props.boxTop }}
        className="choice-box"
      ></div>
    </div>
  );
}
