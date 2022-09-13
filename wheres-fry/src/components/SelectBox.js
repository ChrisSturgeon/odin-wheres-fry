import '../styles/SelectBox.css';

export function SelectBox(props) {
  if (props.showSelect) {
    return (
      <div
        style={{ left: props.boxLeft, top: props.boxTop }}
        className="selection-box"
      >
        <div className="cursor-box">{props.tagResult}</div>
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
