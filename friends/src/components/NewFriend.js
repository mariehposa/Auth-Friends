import React from 'react';
import { Formik } from 'formik';
import AxiosAuth from '../axios/AxiosAuth';
import { FieldStyle, FormStyle, SubmitButton } from './Styles';

const initialFriendValues = {
    name: '',
    age: '',
    email: ''
}

export default function NewFriend (props) {

    const addFriend = (formValues, actions) => {
        AxiosAuth().post('http://localhost:5000/api/friends/', {
            id: Date.now(),
            name: formValues.name,
            age: formValues.age,
            email: formValues.email,
        })
            .then(res => {
                console.log(res);
                props.history.push('/friendList');
            })
            .catch(err => {
                console.log(err.response.data.error)
                alert(err.response.data.error)
            })
        actions.resetForm();
    }

    return (
        <div>
            <FriendForm onAdd={addFriend}/>
        </div>
    );
}

function FriendForm ({onAdd}) {
    return(
        <Formik 
            initialValues={initialFriendValues}
            onSubmit={onAdd}
            render = { props => {
                return (
                    <FormStyle>
                        <label>Name</label>
                        <FieldStyle name="name" type="text" placeholder="Enter name"/>
                        <br />
                        <label>Age</label>
                        <FieldStyle name="age" type="text" placeholder="Enter Age"/>
                        <br />
                        <label>Email</label>
                        <FieldStyle name="email" type="text" placeholder="Enter email"/>
                        <br />
                        <SubmitButton type="submit">Add Friend</SubmitButton>
                    </FormStyle>
                )
            }}
        />
    );
} 