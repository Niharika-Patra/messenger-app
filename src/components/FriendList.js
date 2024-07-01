import React from 'react';

const FriendList = ({ friends, onSelectFriend }) => {
  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} onClick={() => onSelectFriend(friend)}>
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
