import '../styles/Home.css';
import { CharCard } from './CharCard';
import guenter from '../imgs/guenter.jpeg';
import inez from '../imgs/inez.jpeg';
import nibbler from '../imgs/nibbler.jpeg';

export function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-main">
        <p>
          Find and tag the following three Futurama characters in the quickest
          time to see if you can reach the top of the scoreboard! Once you've
          found one, click to tag them.
        </p>
        <div className="char-cards">
          <CharCard name="Guenter" imgPath={guenter} />
          <CharCard name="Inez" imgPath={inez} />
          <CharCard name="Nibbler" imgPath={nibbler} />
        </div>
        <button>Start</button>
      </div>
    </div>
  );
}
