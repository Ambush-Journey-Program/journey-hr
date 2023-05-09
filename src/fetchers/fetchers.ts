export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  streetAddress: string;
  cityStateZip: string;
  phone: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
};

export type VacationPeriod = {
  startDate: string;
  endDate: string;
};

type PeopleResponse = {
  people: Person[];
};

export const fetchPeople = async (url: string) =>
  await fetch(url).then<PeopleResponse>(async (r) => await r.json());

export const fetchVacationPeriod = async (url: string) =>
  await fetch(url).then<VacationPeriod>(async (r) => await r.json());
