import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

export default function StatisticsItem({ label, percentage, backgroundColor }) {
  return (
    <li className={s.item} style={backgroundColor}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  backgroundColor: PropTypes.shape({}),
};
