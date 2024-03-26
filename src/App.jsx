import { useState, useEffect } from 'react';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';
import './App.css';

const App = () => {
  const [options, setOptions] = useState(() => {
    const saveResults = window.localStorage.getItem('results');
    if (saveResults !== null) {
      return JSON.parse(saveResults);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    window.localStorage.setItem('result', JSON.stringify(options));
  }, [options]);

  const updateFeedback = feedbackType => {
    setOptions({
      ...options,
      [feedbackType]: options[feedbackType] + 1
    });
   };

   const totalFeedback = options.good + options.neutral + options.bad;
   const goodRate = Math.round((options.good / totalFeedback) * 100);

   const resetFeedback = () => {
    setOptions({
      good: 0,
      neutral: 0,
      bad: 0
    });
   };
   
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? 
      (<Feedback options={options} totalFeedback={totalFeedback} goodRate={goodRate} />) :
      (<Notification />)}
    </>
  ); 
}

export default App;
