import propTypes from 'prop-types';
import css from './/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.massage}>There is no feedback</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
