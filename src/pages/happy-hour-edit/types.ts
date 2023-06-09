import { SelectHTMLAttributes } from 'react';

export type Profile = {
  id: string;
  name: string;
  team: string;
};

export type HappyHourEditProps = SelectHTMLAttributes<HTMLSelectElement> & {
  guestsListData: Guests[];
  maxGuests?: number;
  minGuests?: number;
};

export type Guests = {
  guest: Profile;
};

export type Employees = {
  guest: Profile;
};
