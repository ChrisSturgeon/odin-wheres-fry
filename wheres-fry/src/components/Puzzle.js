import cast from '../imgs/cast.jpeg';
import '../styles/Puzzle.css';
import { SelectBox } from './SelectBox';
import { useEffect } from 'react';

export function Puzzle(props) {
  useEffect(() => {
    props.startPuzzle();
  }, []);

  return (
    <div
      className={props.showSelect ? `puzzle-wrapper-focused` : `puzzle-wrapper`}
    >
      <div className={props.showSelect ? `focused` : `normal`}>
        <img onClick={props.logCoords} src={cast} alt="Futurama Cast" />
      </div>
      <SelectBox
        boxLeft={props.boxLeft}
        boxTop={props.boxTop}
        showSelect={props.showSelect}
        logCharacter={props.logCharacter}
        tagResult={props.tagResult}
        resultsText={props.resultsText}
        tag={props.tag}
      />
    </div>
  );
}
