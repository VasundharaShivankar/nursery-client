import React, { useState } from 'react'
import "./AddPlant.css";
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPlant() {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const addplant = async ()=>{
        if(!name || !category || !price || !image || !description){
            toast.error('Please Enter All The Details!!!')
            return
        }
        toast.loading("Loading...")
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
            name: name,
            category: category,
            price: price,
            image: image,
            description: description
        })

        toast.dismiss()
        toast.success(response.data.message)

        setName("")
        setCategory("");
        setPrice("");
        setImage("");
        setDescription("");
    }

  return (
    <div>
        <h1 className='h1'>Add Plant</h1>
        <form className='form'>
            <input 
                type='text'
                placeholder='Add Plant Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='input-plant'
            />
            <input 
                type='text'
                placeholder='Add Plant Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='input-plant'
            />
            <input 
                type='number'
                placeholder='Add Plant Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='input-plant'
            />
            <img src={image} className='img'/>
            <input 
                type='text'
                placeholder='Add Plant url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='input-plant'
            />
            <input 
                type='text'
                placeholder='Add Plant Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='input-plant'
            />

            <button type='button' onClick={addplant} className='ad'>Add Plant</button>
        </form>
        <br/>
        <Link to="/" className='link'>Show All Plants</Link>
        <Toaster/>
    </div>
  )
}

export default AddPlant