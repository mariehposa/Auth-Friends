import React, { useRef } from 'react';
import axios from 'axios';
import { LoginStyle, InputStyle, SubmitButton } from './Styles';

export default function LoginForm (props) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post('http://localhost:5000/api/login', {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                //console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friendList');
            })
            .catch(err => {
                //console.log(err.response.data.error)
                alert(err.response.data.error)
            })
    }

    return (
        <LoginStyle>
            username <InputStyle type="text" placeholder="Enter username" ref={usernameRef}/>
            <br />
            password <InputStyle type="text" placeholder="Enter password" ref={passwordRef} />
            <br />
            <SubmitButton onClick={submit}>Submit</SubmitButton>
        </LoginStyle>
    );
}
