import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { url } from "../url/url";
import Cards from './Cards';


const Detalle = async () => {

    const [detalle, setDetalle] = useState([])


    const resp = await fetch(url)
    const dato = await resp.json()

    console.log(dato);

    let Id = Number(JSON.parse(localStorage.getItem('Id')))
    const cardDetalle = dato.filter((element) => (element.id == Id));

    setDetalle(cardDetalle)


    return (
        <div className="container-card1">

            <div className="card-item1" key={detalle[0].id}>
                <div className="card-header1">
                    <h2 className="card-title1">{detalle[0].title}</h2>
                </div>
                <p className="card-descripcion1">{detalle[0].description}</p>
                <div className="card-speakers1">
                    <h4 className="speaker1">{detalle[0].speakers[0]}</h4>
                    <h4 className="speaker1">{detalle[0].speakers[1]}</h4>
                    <h4 className="speaker1">{detalle[0].speakers[2]}</h4>
                </div>
                <h4 className="card-SegmentIndustry1">
                    Segmento industrial: <span>{detalle[0].industry_segment}</span>
                </h4>
                <h4 className="card-mainTopic1">
                    Tema principal: <span>{detalle[0].primary_topic}</span>
                </h4>
                <br></br>

                <Link to='/'>Regresar</Link>
            </div>


        </div>
    )
}

export default Detalle