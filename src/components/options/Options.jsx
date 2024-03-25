// import { useState } from 'react';

const Options = (props) => {
  // const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });
  // const handleOptions = (prop, value) => {
  //   setOptions({
  //     ...options,
  //     [prop]: value + 1
  //   });
  // };
    return (
        <>
          <button  onClick = {props.handleOptions}>Good</button>
          <button  onClick = {props.handleOptions}>Neutral</button>
          <button  onClick = {props.handleOptions}>Bad</button>
        </>
    )
}

export default Options;