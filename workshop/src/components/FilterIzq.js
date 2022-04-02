import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import querystring from "query-string";
import { DivFilIzq, DivH, InputSearch } from "../styled/styleds";
import { url } from "../url/url";
import Cards from "../components/Cards";
import { CardsFilt } from "../components/CardsFilt";
import getSearchByName from "../selectors/getSearchByName";

const FilterIzq = () => {


    //-------------------mostrar filtrado izquierdo data----------------------//
    const [data, setData] = useState([]);

    const getData = () => {
        axios
            .get(url)
            .then((resp) => setData(resp.data))
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
    }, []);


    let industry = data.map((element) => element.industry_segment);
    let resultIndustry = industry.filter((item, index) => {
        return industry.indexOf(item) === index;
    })

    let primary = data.map((element) => element.primary_topic);
    let resultPrimary = primary.filter((item, index) => {
        return primary.indexOf(item) === index;
    })

    let session = data.map((element) => element.session_type);
    let resultSession = session.filter((item, index) => {
        return session.indexOf(item) === index;
    })
    let audience = data.map((element) => element.audience_type);
    let resultAudience = audience.filter((item, index) => {
        return audience.indexOf(item) === index;
    })

    let lenguaje = data.map((element) => element.lenguage);
    let resultLenguaje = lenguaje.filter((item, index) => {
        return lenguaje.indexOf(item) === index;
    })
    
    let level = data.map((element) => element.audience_level);
    let resultLevel = level.filter((item, index) => {
        return level.indexOf(item) === index;
    })

    //-----------------------search---------------------//

    const navigate = useNavigate();
    const location = useLocation();

    const { search } = location;
    const { q = "" } = querystring.parse(search);

    const [values, handleInputChange, resetForm] = useForm({
        searchText: q,
    });

    const { searchText } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    const dataFiltered = getSearchByName(searchText, data);


    return (
        <DivFilIzq>
            <div className="row">
                <div className="col-3">
                    <DivH>
                        <h4>Filter</h4>
                        <button>Clear</button>
                    </DivH>

                    <hr />
                    <form onSubmit={handleSubmit}>
                        <InputSearch
                            type="text"
                            placeholder="Search"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </form>
                    {/* <SearchIcon/> */}

                    <br></br>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Industry Segment</Accordion.Header>
                            <Accordion.Body>
                                {resultIndustry.map((element, index) => (
                                    <Form key={index}>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id={element}
                                                label={element}
                                                onChange = {onChanged}
                                                value = {element}
                                            />
                                        </div>
                                    </Form>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Primary Topic</Accordion.Header>
                            <Accordion.Body>
                                {resultPrimary.map((element, index) => (
                                    <Form key={index}>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id={element}
                                                label={element}
                                                onChange = {onChanged}
                                                value = {element}
                                            />
                                        </div>
                                    </Form>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Session type</Accordion.Header>
                            <Accordion.Body>
                                {resultSession.map((element, index) => (
                                    <Form key={index}>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id={element}
                                                label={element}
                                                onChange = {onChanged}
                                                value = {element}
                                            />
                                        </div>
                                    </Form>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Audience Type</Accordion.Header>
                            <Accordion.Body>
                                {resultAudience.map((element, index) => (
                                    <Form key={index}>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id={element}
                                                label={element}
                                                onChange = {onChanged}
                                                value = {element}
                                            />
                                        </div>
                                    </Form>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Lenguage</Accordion.Header>
                            <Accordion.Body>
                                {resultLenguaje.map((element, index) => (
                                    <Form key={element}>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id={element}
                                                label={element}
                                                onChange = {onChanged}
                                                value = {element}
                                            />
                                        </div>
                                    </Form>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Audence Level</Accordion.Header>
                            <Accordion.Body>
                                {resultLevel.map((element, index) => (
                                    <Form key={index}>
                                        <div className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                id={element}
                                                label={element}
                                                onChange = {onChanged}
                                                value = {element}
                                            />
                                        </div>
                                    </Form>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

                <div className="col-7">
                    <Cards data={dataFiltered} />
                </div>
            </div>
        </DivFilIzq>
    );
};

export default FilterIzq;
