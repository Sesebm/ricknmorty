import React from 'react'
import UseAxios from './Useaxios'

const ResidentInfo = ({url}) => {
 let character = UseAxios(url)
 console.log(character)

  return (
    <div className='card'>
    <img className='card-img' src={character?.image} alt="img" />
    
      <p>{character?.name}</p>
    
      <p>{character?.species}</p>
      <p>{character?.type}</p>
      <p>Status: {character?.status}</p>
    </div>
  )
}

export default ResidentInfo