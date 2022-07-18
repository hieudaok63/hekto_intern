import { useState } from 'react';
import { useFormik } from 'formik';
import config from '~/config';
import * as yup from 'yup';
import { BrandList, Button, HeadingPage, Input } from '~/components';
import { FormBody, StyledForm } from './Login.style';
import { authApi } from '~/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface IForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Login = () => {
    const [changeLogin, setChangeLogin] = useState(true);
    const navigate = useNavigate();

    const breadcrumb = [
        {
            name: 'Home',
            path: config.routes.home,
        },
        {
            name: 'Pages',
            path: config.routes.page,
        },
        {
            name: 'My account',
            path: config.routes.login,
        },
    ];

    const handleChangeLogin = () => {
        resetForm();
        setChangeLogin(!changeLogin);
    };

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        resetForm,
    } = useFormik<IForm>({
        initialValues,
        onSubmit: async (values) => {
            try {
                if (changeLogin) {
                    const body = {
                        email: values.email,
                        password: values.password,
                    };

                    const res = await authApi.login(body);
                    toast.success('Logged in successfully');
                    window.localStorage.setItem('token', res.data.token);
                } else {
                    const body = {
                        name: values.name,
                        email: values.email,
                        password: values.password,
                    };

                    const res = await authApi.register(body);
                    toast.success('Register successfully');
                    window.localStorage.setItem('token', res.data.token);
                }

                navigate(config.routes.home);
            } catch (err: any) {
                toast.error(err.response.data.message);
            }
        },

        validationSchema: yup.object().shape({
            name: yup.string().test({
                name: 'Validate required',
                message: 'Name is required',
                test: (value) => {
                    if (changeLogin) {
                        return true;
                    }

                    return !!value?.trim();
                },
            }),

            email: yup
                .string()
                .required('Email is required')
                .email('Email is invalid.'),
            password: yup
                .string()
                .required('Password is required')
                .min(8, 'Min length is 8 characters'),
            confirmPassword: yup.string().test({
                name: 'Password not match',
                message: 'Password is not match.',
                test: (value, formState) => {
                    if (changeLogin) {
                        return true;
                    }

                    const password = formState.parent.password;
                    return value === password;
                },
            }),
        }),
    });

    return (
        <div>
            <HeadingPage breadcrumb={breadcrumb} title="My Account">
                <FormBody>
                    <StyledForm>
                        <h3>{changeLogin ? 'Login' : 'Register'}</h3>
                        <p>
                            {changeLogin
                                ? 'Please login using account detail bellow.'
                                : ' Please register an account'}
                        </p>
                        {!changeLogin && (
                            <Input
                                placeholder="Name"
                                name="name"
                                error={errors.name}
                                touched={touched.name}
                                value={values.name}
                                onChange={handleChange}
                            />
                        )}
                        <Input
                            placeholder="Email"
                            name="email"
                            error={errors.email}
                            touched={touched.email}
                            value={values.email}
                            onChange={handleChange}
                        />
                        <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={values.password}
                            error={errors.password}
                            touched={touched.password}
                            onChange={handleChange}
                        />
                        {!changeLogin && (
                            <Input
                                placeholder="Confirm password"
                                name="confirmPassword"
                                error={errors.confirmPassword}
                                touched={touched.confirmPassword}
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                            />
                        )}
                        <p>Forgot your password?</p>
                        <Button
                            width="100%"
                            height="47px"
                            backgroundColor="var(--primary)"
                            type="submit"
                            borderRadius="3px"
                            onClick={handleSubmit}
                        >
                            {changeLogin ? 'Signin' : 'Register'}
                        </Button>

                        {!changeLogin ? (
                            <p>
                                Do you already have an Account?{' '}
                                <span
                                    onClick={() => setChangeLogin(!changeLogin)}
                                >
                                    Login
                                </span>
                            </p>
                        ) : (
                            <p>
                                Dont have an Account?{' '}
                                <span onClick={handleChangeLogin}>
                                    Create account
                                </span>{' '}
                            </p>
                        )}
                    </StyledForm>
                    <BrandList />
                </FormBody>
            </HeadingPage>
        </div>
    );
};

export default Login;
