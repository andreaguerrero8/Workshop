import {useState} from 'react'


export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  
  const handleInputChange = ({target}) =>{
    console.log(target);
    setValues({
      ...values,
      [target.name]: target.value
    })
  }
  
  const resetForm = () => {
    setValues(initialState)
  }

  return [values, handleInputChange, resetForm]
}
