import React from 'react'

const Location = ({localitation}) => {
 
  
  
  return (
    <> 

   
        <p>{localitation?.name} </p>
        <p>Type: {localitation?.type} </p>
        <p>{localitation?.dimension}</p>
        <p>Population: {localitation?.residents.length}</p>
    
    </>
  )
}

export default Location