import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {/* тут я рендерю коллекцию */}
        {stats.map((statEl) => (
          <li
            key={statEl.id}
            className={s.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{statEl.label}</span>
            <span className={s.percentage}>{statEl.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: 'Upload stats',
};

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
