import React,{ useState, useEffect } from 'react';
import axios from 'axios';

export default function FriendList () {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    })
    return(
        <div>

        </div>
    );
}