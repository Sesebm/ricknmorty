import React from 'react'
import UseAxios from './UseAxios'

const ResidentInfo = ({url}) => {
 let character = UseAxios(url)


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