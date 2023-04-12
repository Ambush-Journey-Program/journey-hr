export type Guest = {
  id: string;
  name: string;
  team: string;
};

export type Employees = {
  id: string;
  name: string;
  team: string;
};

export type HappyHourEditProps = {
  guestsListData: Guest[];
  maxGuests: number;
  addGuest: (guests: Guest[], employees: Employees[]) => void;
};
