import { useState } from 'react';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import './App.css'

const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleOptions = (prop, value) => {
    setOptions({
      ...options,
      [prop]: value + 1
    });
  };
  return (
    <>
      <Description />
      <Options handleOptions={handleOptions} options={options}/>
      <Feedback handleOptions={handleOptions} options={options}/>
    </>
  )
}

export default App
