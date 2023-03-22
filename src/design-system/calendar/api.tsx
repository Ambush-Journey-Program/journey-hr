import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export function Api() {
  const [profile, setProfile] = useState([]);
  const storageAuthToken =
    window.localStorage.getItem('google_auth_token') ?? '';
  const [authToken, setAuthToken] = useState(storageAuthToken);

  const saveToLocalStorage = (token: string) =>
    window.localStorage.setItem('google_auth_token', token);

  useEffect(() => {}, [authToken]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setAuthToken(tokenResponse.access_token);
      saveToLocalStorage(tokenResponse.access_token);
    },
  });

  // `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${authToken}`,
  useEffect(() => {
    const data = axios
      .get(
        'https://content.googleapis.com/calendar/v3/users/me/calendarList/primary',
        {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem(
              'google_auth_token',
            )}`,
            Accept: 'application/json',
          },
        },
      )
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <button onClick={() => login()}>Sign in with Google 🚀</button>; ;
    </>
  );
}
