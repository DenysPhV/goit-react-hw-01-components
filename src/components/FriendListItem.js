import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
