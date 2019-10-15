import React,{ useState, useEffect } from 'react';
import AxiosAuth from '../axios/AxiosAuth';
import FriendCard from './FriendCard'

export default function FriendList () {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        AxiosAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err.response.data.error);
                alert(err.response.data.error)
            })
    }, [])
    return(
        <div>
            {
                friends.map(friend => <FriendCard key={friend.id} friend={friend} /> )
            }
        </div>
    );
}