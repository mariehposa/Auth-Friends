import React from 'react';

export default function LoginForm () {
    return (
        <div>
            username <input type="text" placeholder="Enter username"/>
            <br />
            password <input type="text" placeholder="Enter password" />
            <br />
            <button>Submit</button>
        </div>
    );
}
