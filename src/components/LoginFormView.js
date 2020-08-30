import React from 'react';
import Form from './Form'

const LoginFormView = (props) => {
    const login = (form) => {
        props.firebase.auth().signInWithEmailAndPassword(form.email,form.password)
        .then((response)=>props.login('logged_in'))
        .catch((err)=>console.log("There is an error",err))
    }
    return (
    <>
    <Form type="Login" form={login} />
    </>
    ); 
}

export default LoginFormView;