import { google } from 'googleapis';

const GOOGLE_PRIVATE_KEY = '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';
const GOOGLE_CLIENT_ID =
  '433097940091-qjhhipvd813d7dsppjafpor9dl7qk7pv.apps.googleusercontent.com';
const GOOGLE_CLIENT_EMAIL = 'mariana.maia@getambush.com';
const GOOGLE_PROJECT_NUMBER = 'marianaspikeproject';
const GOOGLE_CALENDAR_ID = 'mariana.maia@getambush.com';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const authClient = new google.auth.OAuth2({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_PRIVATE_KEY,
});

const calendar = google.calendar({
  version: 'v3',
  auth: authClient,
});

export function listEvents() {
  calendar.events
    .list({
      auth: authClient,
      calendarId: GOOGLE_CALENDAR_ID,
    })
    .then((event) => console.log({ event }))
    .catch((error) => console.log({ error }));
}
