import '../styles/Counter.css';

export function Counter(props) {
  return (
    <button className="counter-btn" onClick={props.toggleHelp}>
      <div className="count-number">{3 - props.count}</div>
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
