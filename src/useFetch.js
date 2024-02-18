import React from 'react'
import { useState, useEffect } from 'react'

export const useFetch = (url) => {

  const [dato, setDato] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


useEffect(()=>{
    const fetchear = async ()=>{

        try{
            setLoading(true)
            const response = await fetch(url)
            const json = await response.json()
            await setDato(json)
        }
        catch{
            setError(true)
            setLoading(false)
        }
        finally{
            setLoading(false)


        }
      }

      fetchear()
},[url])



  return {dato, loading, error}
}
