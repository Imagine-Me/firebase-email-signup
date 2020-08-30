import React, { useReducer } from 'react';
const initialState = {
    email: "",
    password: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "EMAIL": return { ...state, email: action.payload }
        case "PASSWORD": return { ...state, password: action.payload }
        default: return state
    }
}


const Form = (props) => {
    const [form, dispatch] = useReducer(reducer, initialState)

    const onFormSubmit= (event)=>{
        event.preventDefault();
        props.form(form)
    }
    return (
        <form onSubmit={onFormSubmit}>
            <div className="form-title">{props.type}</div>
            <input type="email" placeholder="Enter email" value={form.email}  onChange={(event)=>dispatch({type: "EMAIL",payload: event.target.value})} />
            <input type="password" placeholder="Enter password" value={form.password} onChange={(event)=>dispatch({type: "PASSWORD",payload: event.target.value})} />
            <button>{props.type}</button>
        </form>
    );
}

export default Form;