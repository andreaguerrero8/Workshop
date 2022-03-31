import React from 'react'
import '../styles/Cards.css'
import star from '../Images/iconmonstr-star-thin.svg'

const Cards = () => {
    
  return (
    <div className="container-main">
        <div className="nav-filter">
            <ul className="lista-filter">
                <li className="filter-date">date</li>
                <li className="filter-date">date</li>
                <li className="filter-date">date</li>
                <li className="filter-date">date</li>
                <li className="filter-date">date</li>
            </ul>
        </div>
        <div className="container-card">
            <div className="card-item">
                <div className="card-header">
                <h2 className="card-title">titulo</h2>
                <img src={star} alt="icon-star" />
                </div>
                <p className="card-descripcion">
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <div className="card-speakers">
                    <h4 className="speaker" >Nombre orador</h4>
                    <h4 className="speaker" >Nombre orador</h4>
                </div>
                <h4 className="card-SegmentIndustry">Segmento industrial: <span>All Industry</span></h4>
                <h4 className="card-mainTopic">Tema principal: <span>Estrategia de IA para líderes empresariales</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Cards