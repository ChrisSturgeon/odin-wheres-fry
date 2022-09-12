import { useState, useEffect } from 'react';

export function Timer(props) {
  const [totalSeconds, setTotalSeconds] = useState(null);
  const [displaySeconds, setDisplaySeconds] = useState(null);
  const [displayMinutes, setDisplayMinutes] = useState(null);

  // Sets interval to calculate total number of seconds since timer starts, clears on unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds(Math.round((new Date() - props.startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  });

  // Calculates total time into minutes and seconds for display
  useEffect(() => {
    const minutes = Math.floor(totalSeconds / 60);
    setDisplayMinutes(minutes);
    const seconds = totalSeconds - minutes * 60;
    setDisplaySeconds(seconds);
  }, [totalSeconds]);

  return (
    <div>
      <p>
        {displayMinutes}:{displaySeconds < 10 ? '0' : null}
        {displaySeconds}
      </p>
    </div>
  );
}
