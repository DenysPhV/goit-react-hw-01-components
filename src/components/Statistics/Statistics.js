import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {/* тут я передаю и перебираю коллекцию из StatisticsItem*/}
        {stats.map(({ id, label, percentage, backgroundColor }) => (
          <StatisticsItem
            key={id}
            label={label}
            percentage={percentage}
            backgroundColor={{ backgroundColor: randomColor() }}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  // Массив объектов конкретного типа использую там где MAP
  stats: PropTypes.arrayOf(
    // Объект с определённой структурой
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function randomColor() {
  return `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255,
  )}, ${Math.round(Math.random() * 255)})`;
}
