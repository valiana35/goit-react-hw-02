import css from './Options.module.css';

const Options = ({ updateFeedback,totalFeedback, resetFeedback }) => {
    return (
        <div className={css.optionsBtn}>
          <button className={css.optionbtn}  onClick={() => updateFeedback('good')}>Good</button>
          <button className={css.optionbtn}  onClick={() => updateFeedback('neutral')}>Neutral</button>
          <button className={css.optionbtn}  onClick={() => updateFeedback('bad')}>Bad</button>
          {totalFeedback > 0 && (<button className={css.optionbtn} onClick={() => resetFeedback()}>Reset</button>)}
        </div>
    );
}

export default Options;