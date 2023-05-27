import React from 'react'



const Button = ({bgcolor, color='black', handleEvent, children}) => {

    console.log(handleEvent)

    const btnStyles = {
        backgroundColor: bgcolor,
        color: color,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
    }

    return (
        <button style={btnStyles} onClick={handleEvent}> {children}</button>
    )
}

export default Button