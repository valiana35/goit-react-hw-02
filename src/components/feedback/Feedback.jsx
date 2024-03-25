const Feedback = ({ options: { good, neutral, bad } }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </>
  )
  }


export default Feedback