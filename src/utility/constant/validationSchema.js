import * as Yup from 'yup'

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .trim('Spaces not allowed')
    .strict()
    .required('Email is required'),
  password: Yup.string().trim('Spaces not allowed').required().strict(),
})

export const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .trim('Spaces not allowed')
    .strict()
    .required('Email is required'),
})

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .trim()
    .required('Email is required'),

  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),

  confirmPassword: Yup.string()
    .trim()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),

  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('Terms and conditions must be accepted'),

  name: Yup.string().trim().required('Name is required'),
})

export const UpdateProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .trim()
    .required('Email is required'),

  password: Yup.string()
    .trim()
    .min(6, 'Password must be at least 6 characters'),
  phoneNo: Yup.string().trim(),
  zipcode: Yup.string().trim(),
  state: Yup.string().trim(),
  country: Yup.string().trim(),
  address: Yup.string().trim(),
  name: Yup.string().trim(),
})
