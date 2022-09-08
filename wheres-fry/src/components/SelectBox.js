import '../styles/SelectBox.css';

export function SelectBox(props) {
  if (props.showSelect) {
    return (
      <div
        style={{ left: props.boxLeft, top: props.boxTop }}
        className="selection-box"
      >
        <div className="cursor-box"></div>
        <div className="buttons-box">
          <button onClick={props.logCharacter}>Guenter</button>
          <button onClick={props.logCharacter}>Nibbler</button>
          <button onClick={props.logCharacter}>Inez</button>
        </div>
      </div>
    );
  } else {
    return <div style={{ height: 100 }}></div>;
  }
}
