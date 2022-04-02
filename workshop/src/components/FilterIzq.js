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
  //-------------------data----------------------//
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

  let algo = data.filter((element) => new Set(element.industry_segment));
  // console.log(algo);

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
  // console.log(dataFiltered);

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
                {data.map((element) => (
                  <Form key={element.id}>
                    <div className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={element.id}
                        label={element.industry_segment}
                      />
                    </div>
                  </Form>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Primary Topic</Accordion.Header>
              <Accordion.Body>
                {data.map((element) => (
                  <Form key={element.id}>
                    <div className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={element.id}
                        label={element.primary_topic}
                      />
                    </div>
                  </Form>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Session type</Accordion.Header>
              <Accordion.Body>
                {data.map((element) => (
                  <Form key={element.id}>
                    <div className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={element.id}
                        label={element.session_type}
                      />
                    </div>
                  </Form>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Audience Type</Accordion.Header>
              <Accordion.Body>
                {data.map((element) => (
                  <Form key={element.id}>
                    <div className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={element.id}
                        label={element.audience_type}
                      />
                    </div>
                  </Form>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Lenguage</Accordion.Header>
              <Accordion.Body>
                {data.map((element) => (
                  <Form key={element.id}>
                    <div className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={element.id}
                        label={element.lenguage}
                      />
                    </div>
                  </Form>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Audence Level</Accordion.Header>
              <Accordion.Body>
                {data.map((element) => (
                  <Form key={element.id}>
                    <div className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id={element.id}
                        label={element.audience_level}
                      />
                    </div>
                  </Form>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-7">
          {/* <Cards Filtrados={dataFiltered} /> */}

          <CardsFilt data={dataFiltered} />
        </div>
      </div>
    </DivFilIzq>
  );
};

export default FilterIzq;
