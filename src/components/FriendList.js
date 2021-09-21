export default function FriendList({ avatar, name, isOnline }) {
  // class="friend-list"
  <ul>
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  </ul>;
}
