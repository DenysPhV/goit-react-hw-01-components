import Profile from './components/Profile';
import Statistics from './components/Statistics';
// import FriendList from './components/FriendList';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
// import friends from './json/friends.json';
// import Avatar from './images/avatar.png';

console.log(statisticalData[0].label);

// console.log(friends[0].name);

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={Statistics} stats={statisticalData[0].label} />
      <Statistics stats={statisticalData[1].percentage} />

      {/* <FriendList friends={friends} /> */}
    </div>
  );
}
