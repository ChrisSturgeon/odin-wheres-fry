import '../styles/Help.css';
import { CharCard } from './CharCard';
import guenter from '../imgs/guenter.jpeg';
import inez from '../imgs/inez.jpeg';
import nibbler from '../imgs/nibbler.jpeg';

export function Help() {
  return (
    <div className="help-main">
      <CharCard name="Guenter" imgPath={guenter} />
      <CharCard name="Inez" imgPath={inez} />
      <CharCard name="Nibbler" imgPath={nibbler} />
    </div>
  );
}
