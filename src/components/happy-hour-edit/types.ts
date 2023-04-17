export type Profile = {
  id: string;
  name: string;
  team: string;
};

export type HappyHourEditProps = {
  guestsListData: Guests[];
  maxGuests: number;
};

export type Guests = {
  guest: Profile;
};

export type Employees = {
  guest: Profile;
};
