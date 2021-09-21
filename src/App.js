import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
// import Avatar from './images/avatar.png';

// console.log(statisticalData[0].label, statisticalData[0].percentage);

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
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
    </div>
  );
}
