import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

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

    if (user) {
        navigate("/")
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