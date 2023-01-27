import propTypes from 'prop-types';
import css from './/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
                <div className={css.btnList}>
                    <button className={css.btn} onClick={()=>onLeaveFeedback("good")}>Good</button>
                    <button className={css.btn} onClick={()=>onLeaveFeedback("neutral")}>Neutral</button>
                    <button className={css.btn} onClick={()=>onLeaveFeedback("bad")}>Bad</button>
                </div>
    )
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.number).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};