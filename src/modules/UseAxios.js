import axios from 'axios'
import React, { useEffect, useState } from 'react'

  
  
const UseAxios = url => {
    const [response, setResponse] = useState()
    
    useEffect(() => {
      
      axios.get(url)
      .then(res=> {setResponse(res.data)})
      .catch(err=> console.log(err))
    }, [])
    
    return response
}

export default UseAxios