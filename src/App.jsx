import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Location from './modules/Location'
import ResidentInfo from './modules/ResidentInfo'
import UseAxios from './modules/Useaxios'


let aleatorio = Math.floor(Math.random() * 126) + 1;


function App() {
  
  
  var localitation= UseAxios(`https://rickandmortyapi.com/api/location/${aleatorio}`)
 
  


  return (
    <div className="App">
    
      <div className='head-img-container'>
        <img className='head-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/829e53c9-f6cd-4a51-99e4-23bfad4178e0/dbp1ypz-3bb9c9fa-4f68-4a66-a681-a49a58121c69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyOWU1M2M5LWY2Y2QtNGE1MS05OWU0LTIzYmZhZDQxNzhlMFwvZGJwMXlwei0zYmI5YzlmYS00ZjY4LTRhNjYtYTY4MS1hNDlhNTgxMjFjNjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VT1K-fe0A8-AQNs5rtAvcUy5tEHPbuHwWTL8z7UlEAA" alt="" />
        {/* <h1 className='head-h1'>Rick and Morty Wiki</h1> */}</div>
      <div className='location'><Location  localitation={localitation}/></div>
      <br />
      <div className='residents'>{localitation?.residents.map(char=>(<ResidentInfo  key={char} url={char}/>))}</div>
    </div>
  )
}

export default App
