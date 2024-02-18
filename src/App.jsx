import React from 'react'
import {useState} from 'react'
import { useFetch } from './useFetch'

export const App = () => {

  const[city, setCity] = useState("london")
  const[text, setText] = useState("")
  const[comidaChina, setComidaChina] = useState("arroz")


  const{ dato, loading, error } = useFetch("http://api.weatherapi.com/v1/current.json?key=380d0a2d6522488997a200525241801&q="+city+"&aqi=no")


  function handleChange (e){
    setText(e.target.value)
  }

  function handleClick (e){
    e.preventDefault()
    if(text !== ""){
      setCity(text)
    }
 
  }

  console.log(dato)

  return (
    <>
      <form action="">
        <input onChange={handleChange} value={text} type="text" />
        <button onClick={handleClick}></button>
      </form>

      
      <div className='results'>

        {error? <h1>error,porfavor seleccione otra locacion</h1>:
        
        
        loading?
         <div>loading</div>:
         
         <div className='data'>
          <div className='place'>
            <h1 className='locationName'>{dato.location.name}</h1>
            <h3 className='country'>{dato.location.country}</h3>
          </div>
          <div className='clima'>
            <img className='img' src={dato.current.condition.icon} alt="" />
            <div className='temperature'>
              <p className='temperature_p'> {dato.current.condition.text} </p>
              <h2 className='temperature_h2'> {dato.current.temp_c}°</h2>
            </div>
          </div>
          <div className='mapa'>
          <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36155.09463804065!2d${dato.location.lon}123!3d${dato.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1705761733463!5m2!1ses!2sve`}
            title='map'
            width="600"
            height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
         
         
      }
      </div>
    </>
  )
}
