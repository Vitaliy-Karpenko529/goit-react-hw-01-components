import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';
import data from './components/Statistics/data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './components/FriendsList/friends.json';
import FriendsList from './components/FriendsList/FriendsList';
import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
