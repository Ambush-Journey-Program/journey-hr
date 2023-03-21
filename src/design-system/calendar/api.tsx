import React, { useEffect, useState } from 'react';
import {
  GoogleLogin,
  googleLogout,
  GoogleOAuthProvider,
  useGoogleLogin,
} from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export function Api() {
  const [profile, setProfile] = useState([]);
  const storageAuthToken =
    window.localStorage.getItem('google_auth_token') ?? '';
  const [authToken, setAuthToken] = useState(storageAuthToken);

  const saveToLocalStorage = (token: string) =>
    window.localStorage.setItem('google_auth_token', token);

  useEffect(() => {
    saveToLocalStorage(authToken);
  }, [authToken]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setAuthToken(tokenResponse.access_token);
    },
  });

  useEffect(() => {
    const data = axios
      .get('https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest', {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: 'application/json',
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  });

  return <button onClick={() => login()}>Sign in with Google 🚀</button>;
}
