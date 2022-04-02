
const getSearchByName = (name, dato) => {
    return dato.filter(element =>
        element.title.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
        element.description.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
        element.industry_segment.toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
        element.primary_topic.toLocaleLowerCase().includes(name.toLocaleLowerCase()
        ))
}

export default getSearchByName