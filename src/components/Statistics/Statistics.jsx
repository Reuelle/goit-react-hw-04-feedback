import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistics_container}>
      <h3 className={s.statistics_head}>Statistics</h3>
      <ul className={s.statistics_list}>
        <li>GOOD: {good}</li>
        <li>NEUTRAL: {neutral}</li>
        <li>BAD: {bad}</li>
        <li>TOTAL: {total}</li>
        <li>POSITIVE FEEDBACK: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
