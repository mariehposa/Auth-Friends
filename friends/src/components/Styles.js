import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FriendStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2.5rem;
    width: 20%;
    border: .2rem solid ;
    border-radius: 2rem ;
    color: blue;
    padding: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &:hover{
        border: .2rem solid green;
        border-radius: 2rem;
        color: black;
    }

    h2{
        color: black;
        font-family: 'Dancing Script', cursive;
        font-size: 3rem;

        &:hover{
            color: green;
            font-size: 1.6rem;
        }
    }
`

export const ParentStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const EditButton = styled.button`
   padding: .7rem;
   width: 30%;
   background: green;
   margin-right: .5rem;
`

export const DeleteButton = styled.button`
   padding: .7rem;
   width: 30%;
   background: red;
   margin-left: .5rem;
`

export const FormStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    border: .1rem solid black ;
    padding: 2rem 0;
    border-radius: 2rem;
    box-shadow: 10rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
    margin-top: 5rem;
`

export const FieldStyle = styled(Field)`
    align-self:center;
    width: 45%;
    padding: .7rem;
    margin: 1rem ;
`

export const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    border: .1rem solid black ;
    padding: 2rem 0;
    border-radius: 2rem;
    box-shadow: 10rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
    margin-top: 5rem;
`

export const InputStyle = styled.input`
    align-self:center;
    width: 45%;
    padding: .7rem;
    margin: 1rem ;
`

export const SubmitButton = styled.button`
   width: 20%;
   padding: 1.2rem;
   border-radius: 2rem;
   background: #000000;
   color: whitesmoke;
   margin: 0 auto;
   align-content: center;
`