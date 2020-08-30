import React, { useState,useEffect } from 'react';
import Firebase from 'firebase'
import './App.css';
 
import LogoutView from './components/LogoutView'
import SignupFormView from './components/SignupFormView'
import LoginFormView from './components/LoginFormView'
import LoginView from './components/LoginView'
 
function App() {
 const [state,setState] = useState("log_out")
 const [f_state,setFState] = useState(null)
 
 const buttonClick = (type) =>{
   setState(type)
 }

 useEffect(() => {
  var firebaseConfig = {
    apiKey: "<APP_KEY>",
    authDomain: "<AUTH_DOMAIN>",
    databaseURL: "<DATABASE_URL>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_ID>",
    appId: "<APP_ID>"
  };
  // Initialize Firebase
  setFState(Firebase.initializeApp(firebaseConfig))
 }, [])

 useEffect(() => {
   if(f_state !=null){
     f_state.auth().onAuthStateChanged((user)=>{
       if(user !=null)
       setState("logged_in")
     })
   }
 }, [f_state])

 const changeState = (type) => {
  setState(type);
 }
 return <>
   {state ==="log_out" ?<LogoutView  click={buttonClick} />: null}
   {state === "signup" ? <SignupFormView firebase={f_state} />: null }
   {state ==="login" ? <LoginFormView firebase={f_state} login={changeState} />: null}
   {state ==="logged_in" ? <LoginView firebase={f_state} logout={changeState} />: null}
  
 </>
}
 
export default App;