import React from 'react'
import "./PlantCard.css"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function PlantCard({_id, name, category, image, price, description, loadPlants}) {

  const deletePlant = async (id) => {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${id}`)
    toast.success(response.data.message)
    window.location.reload() 
    loadPlants()
}
  return (
    <div className='card'>
      <div>
      <div className='plant-card'>
        <h1 className='plant-title'>{name}</h1>
        <p className='plant-price'>Price: {price}</p>
        <img src={image} className='plant-card-img'/>

        <div>
          <Link to={`/update/${_id}`}>
              <button type='button' className='plant-card-btnn'>EDIT</button>
          </Link>

        <button 
            type='button' 
            className='plant-card-btnn' 
            onClick={()=>{
              deletePlant(_id)
            }}>DELETE</button>
        </div>
      </div></div>
      <toaster/>
    </div>
  )
}

export default PlantCard