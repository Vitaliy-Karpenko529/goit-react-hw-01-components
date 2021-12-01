import styles from './FriendsList.module.css';
import PropTypes from 'prop-types';

function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? isOnline : 'red' }}
      >
        {isOnline}
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="55"
      />
      <p className={styles.name}>{name}</p>
    </>
  );
}

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsListItem;
