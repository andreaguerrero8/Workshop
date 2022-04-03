
const getSearchByName = (seleccion, dato) => {

    return dato.filter(element =>
        element.title.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()) ||
        element.description.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()) ||
        element.industry_segment.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()) ||
        element.primary_topic.toLocaleLowerCase().includes(seleccion.toLocaleLowerCase()
        ))


}

export default getSearchByName