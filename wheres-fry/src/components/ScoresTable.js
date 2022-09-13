export function ScoresTable(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {props.scores.map((score, index) => {
            const minutes = Math.floor(score.score / 60);
            const seconds = score.score - minutes * 60;

            return (
              <tr key={score.timestamp}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
