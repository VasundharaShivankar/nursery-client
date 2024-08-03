import React, {useEffect, useState} from 'react'
import "./Home.css"
import PlantCard from "./../../components/PlantCard/PlantCard"
import axios from "axios"
import toast,{Toaster} from 'react-hot-toast'
import ImgAdd from "./add.png"
import { Link } from 'react-router-dom'

function Home() {
    const [plants, setPlants] = useState([])

    const loadPlants = async () =>{
        toast.loading("Loading Plants...")
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

        toast.dismiss()
        toast.success("Plants Loaded Successfully!!")
        setPlants(response.data.data)
    }
    useEffect(()=>{
        loadPlants()
    },[])

//   const plants = [
//     {
//         "_id": "66a6db18530434437a4e8e01",
//         "name": "Roses",
//         "category": "indoor",
//         "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMPWirbmwewB6MWH0XdKlOVTUza1YtLhdcobbMn34S5cCzgGDLNF5T4of-_Q2xYA2nzIJ5XYzPr2wNoxCUmLjJ3BIwqLe6hwtQIw2PS3gz&usqp=CAc",
//         "price": 290,
//         "description": "Mogra is a genus of shrubs and vines in the olive family of Oleaceae. It contains around 200 species native to tropical and warm temperate regions of Eurasia, Africa, and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7c7191b20782091d28217",
//         "name": "Jasmin",
//         "category": "indoor",
//         "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMPWirbmwewB6MWH0XdKlOVTUza1YtLhdcobbMn34S5cCzgGDLNF5T4of-_Q2xYA2nzIJ5XYzPr2wNoxCUmLjJ3BIwqLe6hwtQIw2PS3gz&usqp=CAc",
//         "price": 250,
//         "description": "Jasmine is a genus of shrubs and vines in the olive family of Oleaceae. It contains around 200 species native to tropical and warm temperate regions of Eurasia, Africa, and Oceania. Jasmines are widely cultivated for the characteristic fragrance of their flowers.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7c79f1b20782091d2821a",
//         "name": "Bamboo",
//         "category": "indoor",
//         "image": "https://vaaree.com/products/faux-evergreen-bamboo-plant-with-pot-dark-green?pr_prod_strat=e5_desc&pr_rec_id=a769795a9&pr_rec_pid=8593226170614&pr_ref_pid=8593226137846&pr_seq=uniform",
//         "price": 500,
//         "description": "Bamboo grows well both indoors and outdoors. If you're growing lucky bamboo in water, you can train it to twist and curl in different ways. You can also arrange different types of bamboo plants together. For example, try potting green and variegated bamboo stalks together.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7c7c51b20782091d2821d",
//         "name": "Lily",
//         "category": "indoor",
//         "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMPWirbmwewB6MWH0XdKlOVTUza1YtLhdcobbMn34S5cCzgGDLNF5T4of-_Q2xYA2nzIJ5XYzPr2wNoxCUmLjJ3BIwqLe6hwtQIw2PS3gz&usqp=CAc",
//         "price": 200,
//         "description": "Lilies are a genus of flowering plants which includes around 100 species.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7c9481b20782091d28221",
//         "name": "Tulip",
//         "category": "outdoor",
//         "image": "https://5.imimg.com/data5/VQ/EQ/MY-30742137/tulip-91szdsz03ql-_sl1500_-500x500.jpg",
//         "price": 120,
//         "description": "Tulips are spring-blooming perennials that grow from bulbs.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7c9ae1b20782091d28224",
//         "name": "Daffodil",
//         "category": "outdoor",
//         "image": "https://rukminim2.flixcart.com/image/850/1000/kumzpu80/plant-seed/o/p/g/15-daffodil-315-fernsfly-original-imag7px6xnpwjwdc.jpeg?q=20&crop=false",
//         "price": 100,
//         "description": "Daffodils are known for their trumpet-shaped flowers and are a symbol of spring.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7c9fa1b20782091d28227",
//         "name": "Sunflower",
//         "category": "outdoor",
//         "image": "https://5.imimg.com/data5/NY/AN/MY-39459586/land-flowering-plant-500x500.jpg",
//         "price": 150,
//         "description": "Sunflowers are tall plants known for their large, bright yellow flowers.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7ca4c1b20782091d2822a",
//         "name": "Orchid",
//         "category": "indoor",
//         "image": "https://nurserylive.com/cdn/shop/products/nurserylive-g-dendrobium-orchid-plant-310908.jpg?v=1679749855",
//         "price": 250,
//         "description": "Orchids are a diverse and widespread family of flowering plants with blooms that are often colorful and fragrant.",
//         "__v": 0
//     },
//     {
//         "_id": "66a7caa31b20782091d2822d",
//         "name": "Peony",
//         "category": "outdoor",
//         "image": "https://images-cdn.ubuy.co.in/6351376b77a1e03d89105e13-1-peony-plant-double-peony-quot-karl.jpg",
//         "price": 180,
//         "description": "Peonies are known for their large, fragrant flowers and are popular in gardens.",
//         "__v": 0
//     }
// ]

  return (
    <div>
       <h1 className='Heading'>PLANTS</h1>
       {
        plants.map((plant, i)=>{
          const{
                _id, 
                name, 
                category, 
                image, 
                price, 
                description
              } = plant

          return (<PlantCard 
                      key={i}
                      _id ={_id} 
                      name={name} 
                      category={category} 
                      image={image} 
                      price={price} 
                      description={description}
                      loadPlants={loadPlants}
                  />)
        })
       }
       <Toaster/>
       <Link to="/add">
        <img src={ImgAdd} className='add-btn'/>
       </Link>
    </div>
  )
}

export default Home



//Press (ctrl + shift + p) and reload window