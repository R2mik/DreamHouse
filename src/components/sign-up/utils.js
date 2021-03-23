import * as yup from 'yup';

//->move this to utils
export const schema = yup.object().shape({
    firstName: yup.string().required("proszę wpisać imię"),
    email: yup.string().email("e-mail jest niepoprawny").required("proszę wpisać e-mail"),
    phoneNumber: yup.number("Numer jest niepoprawny").positive("Numer nie może być liczbą ujemną").integer("Numer nie może być liczbą dziesiętną").min(100000000, "Numer jest za krótki").max(999999999, "Numer jest za długi").required("Proszę wpisać numer"),
    message: yup.string().required("proszę wpisać wiadomość")
})