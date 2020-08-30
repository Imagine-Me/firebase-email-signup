import React from 'react';
import Form from './Form'


const SignupView = (props) => {
    const signup =(form)=>{
        props.firebase.auth().createUserWithEmailAndPassword(form.email,form.password)
        .then((response)=>console.log("Signed in success"))
        .catch((err)=>console.log("There is an error "))
    }
    return (
    <>
    <Form type="Sign up" form={signup} />
    </>
    );
}

export default SignupView;