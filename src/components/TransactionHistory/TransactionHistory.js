import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.title}>
          <th className={s.label}>Type</th>
          <th className={s.label}>Amount</th>
          <th className={s.label}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {/* тут я рендерю коллекцию */}
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.item}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  // Массив объектов и Объект со свойствами конкретного типа
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
