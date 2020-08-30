import React from 'react';

const LoginView = (props) => {

    const logout = () => {
        props.firebase.auth().signOut().then(()=>{
            props.logout("log_out")
        })
        .catch((err)=>console.log("error"))
    }
    return (
    <>
    <p>Hello user</p>
    <div>
        <button onClick={logout}>Logout</button>
    </div>
    </>
    );
}

export default LoginView;