import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { url } from "../url/url";
import axios from "axios";
import "../styles/Cards.css";



const Detalle = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios
            .get(url)
            .then((resp) => setData(resp.data))
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect((e) => {
        getData();
    }, []);

    let Id = JSON.parse(localStorage.getItem('Id'))
    const cardDetalle = data.filter(element => element.id == Id);

    return (
        <div className="container-card1">
            {
                cardDetalle.map(e => (
                    <div className="card-item1" key={e.id}>
                        <div className="card-header1">
                            <h2 className="card-title1">{e.title}</h2>
                        </div>
                        <p className="card-descripcion1">{e.description}</p>
                        {/* <div className="card-speakers1">
                            <h4 className="speaker1">{e.speakers[0]}</h4>
                            <h4 className="speaker1">{e.speakers[1]}</h4>
                            <h4 className="speaker1">{e.speakers[2]}</h4>
                        </div> */}
                        <h4 className="card-SegmentIndustry1">
                            Segmento industrial: <span>{e.industry_segment}</span>
                        </h4>
                        <h4 className="card-mainTopic1">
                            Tema principal: <span>{e.primary_topic}</span>
                        </h4>
                        <br></br>

                        <Link to='/'>Regresar</Link>
                    </div>
                ))
            }



        </div>
    )
}

export default Detalle