import { useState, useEffect } from 'react';
import '../styles/Counter.css';

export function Counter(props) {
  const count = 3 - props.count;

  return (
    <button className="counter-btn" onClick={props.toggleHelp}>
      <div className="count-number">{count}</div>
      <div>
        {props.helpBar ? (
          <i className="fa-solid fa-arrow-up"></i>
        ) : (
          <i className="fa-solid fa-arrow-down"></i>
        )}
      </div>
    </button>
  );
}
