import '../styles/Home.css';
import { CharCard } from './CharCard';
import guenter from '../imgs/guenter.jpeg';
import inez from '../imgs/inez.jpeg';
import nibbler from '../imgs/nibbler.jpeg';
import { Link } from 'react-router-dom';

export function Home(props) {
  return (
    <div className="home-wrapper">
      <div className="home-main">
        <p>
          Find and tag the following three Futurama characters in the quickest
          time to see if you can reach the top of the scoreboard! Once you've
          found one, click to tag them.
        </p>
        <p>
          Tip: click the score in the top right if you forget what the
          characters look like!
        </p>
        <div className="char-cards">
          <CharCard name="Guenter" imgPath={guenter} />
          <CharCard name="Inez" imgPath={inez} />
          <CharCard name="Nibbler" imgPath={nibbler} />
        </div>
        <button>
          <Link to="puzzle">Play!</Link>
        </button>
      </div>
    </div>
  );
}
