import React, { useRef } from 'react';
import axios from 'axios';

export default function LoginForm () {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post('http://localhost:5000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                //console.log(res);
                localStorage.setItem('token', res.data.payload)
            })
            .catch(err => {
                //console.log(err.response.data.error)
                alert(err.response.data.error)
            })
    }

    return (
        <div>
            username <input type="text" placeholder="Enter username" ref={usernameRef}/>
            <br />
            password <input type="text" placeholder="Enter password" ref={passwordRef} />
            <br />
            <button onClick = {submit}>Submit</button>
        </div>
    );
}
