import styles from './Statistics.module.css';
import StatisticsItems from './StatisticsItems';
import PropTypes from 'prop-types';

function Statistics({ stats, title }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.item} key={id}>
            <StatisticsItems percentage={percentage} label={label} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
