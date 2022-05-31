import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";

import {schema} from './utils'
import { SignUpView } from './SignUpView';

export default function SignUp() {

    const {register, errors, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

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