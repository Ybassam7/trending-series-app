import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Child from './Child'
import Loader from './Loader'

function Parent() {
  const [series,setSeries]=useState([])
  const [isLoading , setLoading] = useState(true)
  const [apiError ,setError ] = useState(null)
  async function getSeries(){
    try {
      const {data} = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
        {
          headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTY5NzMwMjI2YjkwYWUwYzZiMTAwNGU2NjVlMjIwMiIsIm5iZiI6MTc1ODgyMTEwMC40MzYsInN1YiI6IjY4ZDU3YWVjOGQyODI0NWM3YmRjYmM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzvBBS0rurAWN0MwlkriWqZ5Zc_B6iLA8_aExj6ADKg'
  }
        }
      )
      console.log(data.results)
      setSeries(data.results)
    } catch (error) {
      setSeries(null)
      setError(error.response.data.status_message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=>{
    getSeries();
  },[])

  return (
    <div className="page-container">
      {isLoading&&<Loader/>}
      <div className="page-header">
        <h1 className="page-title">Trending Today</h1>
        <p className="page-subtitle">A curated list of the most popular TV shows right now, based on themoviedb.org</p>
      </div>
      {apiError&&<h1 className='page-subtitle center'>{apiError}</h1>}

      <div className="card-container">
        {series && series
          .filter(serie => serie.id && serie.backdrop_path && serie.name && serie.overview)
          .map((serie) => (
            <Child key={serie.id} item={serie}/>
          ))}
      </div>
    </div>
  )
}

export default Parent;