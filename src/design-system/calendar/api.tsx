import { listEvents } from '../../services/calendar';

export function Api() {
  return (
    <>
      <button onClick={listEvents}>Sign in with Google 🚀</button>; ;
    </>
  );
}
