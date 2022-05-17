import React, { useEffect } from 'react';
import GoogleLogin from './Social/GoogleLogin';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/UseToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user)

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    };
    const navigate = useNavigate()
    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, navigate, token])

    if (loading) {
        return <Loading></Loading>;
    }

    let signinError;
    if (error) {
        signinError = <p className='text-red-500'><small>{error.message}</small></p>
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email here"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span
                                    className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span
                                    className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password here"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'At lest 6 charecters or Longer'
                                    }
                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span
                                    className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signinError}
                        <input type="submit" value="Login" className='btn w-full max-w-xs' />
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-primary' to="/register">Create New Account</Link></small></p>

                    <div class="divider">OR</div>
                    <GoogleLogin></GoogleLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;