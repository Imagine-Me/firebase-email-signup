import React from 'react';

const LogoutView = (props) => {
    return (
        <div className="logout">
            <button onClick={()=>props.click('login')}>Login</button>
            <button onClick={()=>props.click('signup')}>Sign up</button>
        </div>
    );
}

export default LogoutView;