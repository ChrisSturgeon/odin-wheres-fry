export function Scores(props) {
  const dataArr = props.highScores;

  if (dataArr) {
    return (
      <ul>
        {dataArr.map((score) => {
          return <div>{score.time}</div>;
        })}
      </ul>
    );
  }
}
