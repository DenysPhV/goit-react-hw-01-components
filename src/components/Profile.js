export default function Profile(user) {
  const { name, avatar, tag, location, stats } = user; //деструктуризация, ее можно вставить на место пропса user
  return (
    <div>
      <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
