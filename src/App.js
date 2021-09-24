import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
// import Avatar from './images/avatar.png';

export default function App() {
  return (
    <div>
      {/* профиль пользователя */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* статистика */}
      {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
      <Statistics stats={statisticalData} />
      {/*список друзей */}
      <FriendList friends={friends} />
      {/* история транзакций */}
      <TransactionHistory items={transactions} />;
    </div>
  );
}
