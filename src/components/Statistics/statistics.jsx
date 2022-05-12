import { Container } from 'components/container/container';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import { StatisticItem } from '../StatisticItem/statisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={styles.item}
              key={id}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <StatisticItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
