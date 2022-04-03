import React from 'react'

export const CardsFilt = ({data}) => {
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
            <div className="container-card">
                {data.map((element) => {
                    return (
                        <>
                            <div className="card-item" key={toString(element.id)}>
                                <div className="card-header">
                                    <h2 className="card-title">{element.title}</h2>
                                    {/* <img src={star} alt="icon-star" /> */}
                                </div>
                                <p className="card-descripcion">{element.description}</p>
                                <div className="card-speakers">
                                    <h4 className="speaker">{element.speakers[0]}</h4>
                                    <h4 className="speaker">{element.speakers[1]}</h4>
                                    <h4 className="speaker">{element.speakers[2]}</h4>
                                </div>
                                <h4 className="card-SegmentIndustry">
                                    Segmento industrial: <span>{element.industry_segment}</span>
                                </h4>
                                <h4 className="card-mainTopic">
                                    Tema principal: <span>{element.primary_topic}</span>
                                </h4>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
