import '../styles/SelectBox.css';
import { useState, useEffect } from 'react';

export function SelectBox(props) {
  const [styling, setStyling] = useState('tag-neutral');
  const [text, setText] = useState('');

  // Changes focus ring styling colour after tag attempt to red or green, and marks with tick or cross
  useEffect(() => {
    if (props.tagResult) {
      setStyling('tag-correct');
      setText(<i className="fa-solid fa-check"></i>);
    } else if (props.tagResult === false) {
      setStyling('tag-wrong');
      setText(<i className="fa-solid fa-xmark"></i>);
    } else {
      setStyling('tag-neutral');
      setText('');
    }
  }, [props.tagResult]);

  if (props.showSelect) {
    return (
      <div
        style={{ left: props.boxLeft, top: props.boxTop }}
        className="selection-box"
      >
        <div className={styling}>{text}</div>
        <div className="buttons-box">
          <button value="guenter" onClick={props.tag}>
            Guenter
          </button>
          <button value="nibbler" onClick={props.tag}>
            Nibbler
          </button>
          <button value="inez" onClick={props.tag}>
            Inez
          </button>
        </div>
      </div>
    );
  } else {
    return <div style={{ height: 100 }}></div>;
  }
}
