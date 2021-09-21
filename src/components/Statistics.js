// import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {stats.map((statEl) => (
          <li key={statEl.id}>
            <span>{statEl.label}</span>
            <span>{statEl.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

// Statistics.propTypes = { label: PropTypes.string };
