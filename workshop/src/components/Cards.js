import React, { useEffect, useState } from "react";
import "../styles/Cards.css";
import star from "../Images/iconmonstr-star-thin.svg";

const Cards = () => {
  const DataContext = React.createContext();
  const [datas, setData] = useState([]);
  const [date, setDate] = useState([]);

  const url = "https://workshopdaniel.herokuapp.com/sessions";

  const fetchFunction = async () => {
    try {
      const request = await fetch(url);
      const data = await request.json();
      setData(data);
      dates(data);
    } catch (err) {
      console.log(err);
    }
  };

  const dates = (dates) => {
    dates.map((element) => {
      const dateNew = new Date(element.date).toDateString();
      const algo = Date('YYYY-MM-DD')
      // console.log(dateNew);
      console.log(algo);
    });
  };

  useEffect(() => {
    fetchFunction();
  }, []);

  return (
    <div className="container-main">
      {
        <div className="nav-filter">
          <ul className="lista-filter">
            <li className="filter-date"></li>
            <li className="filter-date"></li>
            <li className="filter-date"></li>
            <li className="filter-date"></li>
            <li className="filter-date"></li>
          </ul>
        </div>
      }
      <DataContext.Provider value={datas}>
        <div className="container-card1">
          {datas.map((element) => {
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
      </DataContext.Provider>
    </div>
  );
};

export default Cards;
