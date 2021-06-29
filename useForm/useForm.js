import { useState } from "react";

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value //Aquí computamos, asignamos el valor al name
        });
    }

    return [ values, handleInputChange, reset ];
}
