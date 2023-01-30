import propTypes from 'prop-types';
import css from './/Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
