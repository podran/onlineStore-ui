import * as yup from 'yup';

export const validateScheme = yup.object().shape({
    name: yup.string().required().min(2),
    age: yup.number().positive().min(18),
    email: yup.string().email().required(),
    password: yup.string().required()
});