import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import useToken from '../../Hooks/UseToken';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [token] = useToken(user);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {

        if (token) {
            navigate(from, { replace: true });
        }
    }, [navigate, token, from])

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline w-full max-w-xs">Login With Google</button>
        </div>
    );
};

export default GoogleLogin;