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

    return  data.filter(element =>
      element.title.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()) ||
      element.description.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()) ||
      element.industry_segment.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()) ||
      element.primary_topic.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()
      ))
}

export default getMoviesByName