import propTypes from 'prop-types';
import css from './/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnList}>
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
