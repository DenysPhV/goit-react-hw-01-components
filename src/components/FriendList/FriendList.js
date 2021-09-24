import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {/* тут я рендерю коллекцию */}
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          {<FriendListItem avatar={avatar} name={name} status={isOnline} />}
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  // Массив объектов конкретного типа
  friends: PropTypes.arrayOf(
    // Объект с определённой структурой
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
