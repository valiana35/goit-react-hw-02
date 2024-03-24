import { useState } from 'react';

const Feedback = () => {
    const [ clicks, setClicks ] = useState(0);
    const handleClick = () => {
      setClicks(clicks + 1);
    };
    return (
        <>
          <button onClick = {handleClick}>Good: {clicks}</button>
          <button onClick = {handleClick}>Neutral: {clicks}</button>
          <button onClick = {handleClick}>Bad: {clicks}</button>
        </>
    );
}

export default Feedback;