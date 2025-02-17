import { useState } from 'react';

export const useForm = (innitialForm = {}) => {
    const [formState, setFormState] = useState( innitialForm )

    const onInputChange = ({ target }) =>{
        const {value, name} = target;
        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onResetForm = () =>{
        setFormState(innitialForm);
    };

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
