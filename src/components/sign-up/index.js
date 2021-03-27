import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";

import {schema} from './utils'
import { SignUpView } from './SignUpView';

export default function SignUp() {

    // useForm = { 
    //     register: costam, 
    //     errors: cos tam
    //     handleSubmit: jakas funkcja
    // }
    const {register, errors, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    // useState: [
    //     valid,
    //     setValid
    // ]
    const [valid, setValid] = useState(false);

    const submitForm = (data) => {
        setValid(true);
    }

    return (
      <SignUpView
      {...{
        handleSubmit,
        submitForm, 
        register, 
        errors, 
        valid
      }}/>
    )
}