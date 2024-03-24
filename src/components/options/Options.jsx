import { useState } from 'react';

const Options = () => {
    const [ clicks, setClicks ] = useState(0);
    const handleClick = () => {
      setClicks(clicks + 1);
    };
    return (
        <>
          <button type='button' value={clicks} onClick = {handleClick}>Good</button>
          <button type='button' value={clicks} onClick = {handleClick}>Neutral</button>
          <button type='button' value={clicks} onClick = {handleClick}>Bad</button>
        </>
    )
}

export default Options;