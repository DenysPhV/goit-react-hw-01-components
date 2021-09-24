import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';
// console.log(FriendListItem);

export default function FriendList({ friends }) {
  return (
    <ul>
      {/* тут я рендерю коллекцию */}
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          {<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />}
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
