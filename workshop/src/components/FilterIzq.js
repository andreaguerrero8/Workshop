import React, {useState } from 'react'
import { Accordion, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import querystring from 'query-string'
import { DivFilIzq, DivH, InputSearch } from '../styled/styleds';
import {url} from '../url/url'
import Cards from '../components/Cards';
import axios from 'axios';

const FilterIzq = () => {

    const [values, handleInputChange, resetForm] = useForm({
        searchText: ''
    })

    const {searchText}  = values

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(searchText);
    }


    const [data, setData] = useState([])
    const [dataSearch, setDataSearch] = useState([])

    const getData = () => {
        axios.get(url)
            .then(resp => 
                setData(resp.data)
            )
            .catch((error) => {
                console.log(error);
            })
    }

    getData()

    //-----------------------search---------------------//

   

    return (
        <DivFilIzq>
            <div>
                <div className="row">
                    <div className="col-3">

                        <DivH>

                            <h4>Filter</h4>

                            <h5>Clear</h5>
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

                                    {
                                        data.map(element => (
                                            <Form key={element.id}>
                                                <div  className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={element.id}
                                                        label={element.industry_segment}
                                                    />
                                                </div>
                                            </Form>

                                        ))
                                    }


                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Primary Topic</Accordion.Header>
                                <Accordion.Body>

                                    {
                                        data.map(element => (

                                            <Form  key={element.id}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={element.id}
                                                        label={element.primary_topic}
                                                    />

                                                </div>
                                            </Form>

                                        ))
                                    }

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Session type</Accordion.Header>
                                <Accordion.Body>

                                    {
                                        data.map(element => (

                                            <Form key={element.id}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={element.id}
                                                        label={element.session_type}
                                                    />

                                                </div>
                                            </Form>

                                        ))
                                    }

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Audience Type</Accordion.Header>
                                <Accordion.Body>

                                    {
                                        data.map(element => (

                                            <Form key={element.id}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={element.id}
                                                        label={element.audience_type}
                                                    />

                                                </div>
                                            </Form>

                                        ))
                                    }

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Lenguage</Accordion.Header>
                                <Accordion.Body>

                                    {
                                        data.map(element => (

                                            <Form key={element.id}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={element.id}
                                                        label={element.lenguage}
                                                    />

                                                </div>
                                            </Form>

                                        ))
                                    }

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Audence Level</Accordion.Header>
                                <Accordion.Body>

                                    {
                                        data.map(element => (

                                            <Form key={element.id}>
                                                <div className="mb-3">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={element.id}
                                                        label={element.audience_level}
                                                    />

                                                </div>
                                            </Form>

                                        ))
                                    }

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="col-7">
                        <Cards/>
                        {/* {
                                moviesFiltered.map(movie => (
                                    <MovieCard id={movie.id} name={movie.name} />
                                ))
                            } */}
                    </div>
                </div>
            </div>
        </DivFilIzq>
    )
}

export default FilterIzq