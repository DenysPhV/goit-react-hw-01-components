import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title = 'Upload stats', label, percentage } = props;
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.PropTypes = {
  title: PropTypes.string,
};
