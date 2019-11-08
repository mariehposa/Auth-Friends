import React from 'react';
import { FriendStyle, DeleteButton, EditButton } from './Styles';

export default function FriendCard ({friend, deleteFriend, editFriend}) {
    return(
        <FriendStyle>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <div>
            <EditButton onClick={() => editFriend(friend.id)}>Edit</EditButton>
            <DeleteButton onClick={() => deleteFriend(friend.id)}>Delete</DeleteButton>
            </div>
        </FriendStyle>
    );
}