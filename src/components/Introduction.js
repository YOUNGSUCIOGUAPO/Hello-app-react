import React from 'react'

function Introduction({name, age, city}) {
  return (
    <div>
        <h1>Patient's History</h1>
        <p>Patient's name is {name}</p>
        <p>Patient's age is {age}</p>
        <p>Patient's city is {city}</p>
        <hr/>
    </div>
  )
}

export default Introduction