import Profile from './components/Profile';
import Statistics from './components/Statistics';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
// import Avatar from './images/avatar.png';

console.log(statisticalData);

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
      <Statistics
        title={statisticalData.id}
        stats={statisticalData.percentage}
      />
      ;
      <Statistics stats={statisticalData[0].percentage} />;
    </div>
  );
}
