import React from 'react'

export const SignUpView = ({handleSubmit, submitForm, register, errors, valid}) => (
    <div className="cont">
    <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit(submitForm)}>
        
        { valid  ? <div className="success-message">Sukces! Wiadomość została wysłana</div> : null}

        <input
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={register}
            />
            <span>{errors.firstName?.message}</span>

            <input
            className="form-field"
            type="text"
            placeholder="E-mail"
            name="email"
            ref={register}
            />
            <span>{errors.email?.message}</span>
            
            <input
            className="form-field"
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            ref={register}
            />
            <span>{errors.phoneNumber?.message}</span>
            
            <textarea
            className="form-field"
            type="text"
            placeholder="Message"
            name="message"
            ref={register}
            />                   
            <span>{errors.message?.message}</span>
            
            {valid ? null : <button className="form-field" type="submit">Wyślij</button>}
        </form>
    </div>
 </div>
)