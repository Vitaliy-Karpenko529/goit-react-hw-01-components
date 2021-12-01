import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
function StatisticsItems({ percentage, label }) {
  return (
    <>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </>
  );
}

StatisticsItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItems;
