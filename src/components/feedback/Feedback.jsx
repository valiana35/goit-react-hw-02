import css from './Feedback.module.css';

const Feedback = ({ options: { good, neutral, bad }, totalFeedback, goodRate }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {goodRate}%</p>
    </div>
  );
}

export default Feedback;