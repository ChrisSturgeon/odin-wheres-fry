import { useState } from 'react';
import '../styles/Counter.css';

export function Counter(props) {
  const [helpBox, setHelpBox] = useState(false);
  const count = 3 - props.count;

  function toggleHelpBox() {
    if (helpBox) {
      setHelpBox(false);
    } else {
      setHelpBox(true);
    }
  }

  return (
    <div>
      <button onClick={toggleHelpBox}>{count}</button>
      {helpBox ? <div className="helpBox">Hiya!!!</div> : null}
    </div>
  );
}
