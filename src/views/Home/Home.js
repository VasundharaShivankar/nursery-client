import React, { useEffect, useState } from 'react';
import "./Home.css";
import PlantCard from "./../../components/PlantCard/PlantCard.js";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import ImgAdd from "./add.png";
import { Link } from 'react-router-dom';

function Home() {
    const [plants, setPlants] = useState([]);

    const loadPlants = async () => {
        toast.loading("Loading Plants...");
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`);
        toast.dismiss();
        toast.success("Plants Loaded Successfully!!");
        setPlants(response.data.data);
    };

    useEffect(() => {
        loadPlants();
    }, []);

    return (
        <div>
            <h1 className='Heading'>PLANTS</h1>
            <div className='whole-body'>
                {plants.map((plant, i) => {
                    const { _id, name, category, image, price, description } = plant;
                    return (
                        <PlantCard
                            key={i}
                            _id={_id}
                            name={name}
                            category={category}
                            image={image}
                            price={price}
                            description={description}
                            loadPlants={loadPlants}
                        />
                    );
                })}
                <Toaster />
                <Link to="/add">
                    <img src={ImgAdd} className='add-btn' />
                </Link>
            </div>
        </div>
    );
}

export default Home;
