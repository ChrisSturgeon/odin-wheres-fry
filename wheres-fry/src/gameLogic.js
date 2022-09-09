import { getPosition } from './firebaseFunctions';

// Returns true if players tag attempt is correct for given character
export async function isTagCorrect(xPosition, yPosition, character) {
  const charPositions = await getPosition(character);
  if (
    xPosition >= charPositions.xMin &&
    xPosition <= charPositions.xMax &&
    yPosition >= charPositions.yMin &&
    yPosition <= charPositions.yMax
  ) {
    return true;
  } else {
    return false;
  }
}
