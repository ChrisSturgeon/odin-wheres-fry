import '../styles/CharCard.css';

export function CharCard(props) {
  return (
    <div className="char-card">
      <img src={props.imgPath} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  );
}
