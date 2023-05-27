import React from 'react'
import Button from './Button'

const Greetings = ({username = 'Guest', message}) => {
    console.log('From Greetings Component', username)
    //handle signup button
    const login = () =>{
      alert('Login button clicked');
    }
    //handle login button
    const signup = () =>{
      alert('Login button clicked');
    }
  return (
    <div>
        <h2>Welcome to GoMyCode</h2>
        <p>Greeting name is {username}</p>
        <p>{message}</p>
        <hr/>
        <div>
          <Button bgcolor='red' handleEvent={signup}>signup</Button>
          <Button bgcolor='green' handleEvent={login}>login</Button>
        </div>
    </div>
  )
}

export default Greetings