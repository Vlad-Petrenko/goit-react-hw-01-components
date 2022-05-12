import PropTypes from 'prop-types';
import styles from './statisticItem.module.css';
export const StatisticItem = ({ label, percentage }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </div>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
