import { url } from '../url/url'
import axios from 'axios';
import { useState } from 'react';

const getMoviesByName = (busqueda) => {

  const [data, setData] = useState([])

    axios.get(url)
    .then(resp => setData(resp.data))
    .catch((error) => {
        console.log(error);
    })


    return  data.filter(elem => elem.title.toLocaleLowerCase()
        .includes(busqueda.toLocaleLowerCase()))
}

export default getMoviesByName