import React, { useEffect, useState } from "react";
import "../styles/Cards.css";
import star from "../Images/iconmonstr-star-thin.svg";

const Cards = ({ data }) => {
  const [dates, setDates] = useState([]);

  const traerFechas = () => {
    const newarr = data.map((element) => {
      const fecha = new Date(element.date).toDateString();
      return fecha;
    });

    let result = newarr.filter(
      (element, index) => newarr.indexOf(element) === index
    );
    return result;
  };

  useEffect(() => {
    setDates(traerFechas());
  }, [data]);

  console.log(typeof dates);

  return (
    <div className="container-main">
      {
        <div className="nav-filter">
          <ul className="lista-filter">
            {dates.map((fecha, index) => (
              <li className="filter-date" key={index}>{fecha}</li>
            ))}
          </ul>
        </div>
      }
      <div className="container-card1">
        {data.map((element) => {
          return (
            <div className="card-item1" key={element.id}>
              <div className="card-header1">
                <h2 className="card-title1">{element.title}</h2>
                <img src={star} alt="icon-star" />
              </div>
              <p className="card-descripcion1">{element.description}</p>
              <div className="card-speakers1">
                <h4 className="speaker1">{element.speakers[0]}</h4>
                <h4 className="speaker1">{element.speakers[1]}</h4>
                <h4 className="speaker1">{element.speakers[2]}</h4>
              </div>
              <h4 className="card-SegmentIndustry1">
                Segmento industrial: <span>{element.industry_segment}</span>
              </h4>
              <h4 className="card-mainTopic1">
                Tema principal: <span>{element.primary_topic}</span>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
