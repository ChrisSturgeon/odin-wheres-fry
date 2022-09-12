import cast from '../imgs/cast.jpeg';
import '../styles/Puzzle.css';
import { SelectBox } from './SelectBox';
import { useEffect } from 'react';

export function Puzzle(props) {
  useEffect(() => {
    props.startPuzzle();
  }, []);

  return (
    <div className="puzzle">
      <img onClick={props.logCoords} src={cast} alt="Futurama Cast" />

      <SelectBox
        boxLeft={props.boxLeft}
        boxTop={props.boxTop}
        showSelect={props.showSelect}
        logCharacter={props.logCharacter}
        tag={props.tag}
      />
    </div>
  );
}
