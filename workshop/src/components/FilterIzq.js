import React, { useEffect, useState } from 'react'
import { Accordion, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import querystring from 'query-string'
import { DivFilIzq, DivH } from '../styled/styleds';
import {url} from '../url/url'
import axios from 'axios';



const FilterIzq = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { search } = location
    const { q = '' } = querystring.parse(search)


    const [values, handleInputChange, resetForm] = useForm({
        searchText: q
    })

    const { searchText } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        // navigate(`?q=${searchText}`) //la (?q) quiere decir query
    }

    // const moviesFiltered = getMoviesByName(searchText)
    // console.log(moviesFiltered);



    const [data, setData] = useState([])

    const getData = () => {
        axios.get(url)
            .then((response) => {
                setData(response.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getData()
    }, [])
    




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
                            <input
                                type="text"
                                placeholder="Find your hero"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={handleInputChange}
                            />

                        </form>

                        <br></br>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Industry Segment</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {
                                        
                                        data.map((type) => (
                                            <div key={type.id} className="mb-3">
                                                <Form.Check
                                                    type='checkbox'
                                                    id={type.id}
                                                    label={`Metrics`}
                                                />

                                                <Form.Check
                                                    type='checkbox'
                                                    id={`default-`}
                                                    label={`Metrics`}
                                                />

                                                <Form.Check
                                                    type='checkbox'
                                                    id={`default-`}
                                                    label={`default`}
                                                />

                                                <Form.Check
                                                    type='checkbox'
                                                    id={`default-`}
                                                    label={`default`}
                                                />

                                                <Form.Check
                                                    type='checkbox'
                                                    id={`default-`}
                                                    label={`default `}
                                                />

                                            </div>
                                        ))
                                        
                                        }
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Primary Topic</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`default ${type}`}
                                                />

                                            </div>
                                        ))}
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Other Collections</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`default ${type}`}
                                                />

                                            </div>
                                        ))}
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Session Type</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`default ${type}`}
                                                />

                                            </div>
                                        ))}
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Audience Type</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`default ${type}`}
                                                />

                                            </div>
                                        ))}
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Audience Level</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`default ${type}`}
                                                />

                                            </div>
                                        ))}
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>

                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`default ${type}`}
                                                />

                                            </div>
                                        ))}
                                    </Form>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-7">
                        <h4>  </h4>
                        <hr />

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