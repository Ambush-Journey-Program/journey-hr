export type Guest = {
  id: string;
  name: string;
  team: string;
};

export type HappyHourEditProps = {
  guestsList: Guest[];
  maxGuests: number;
  addGuest: (guests: Guest[]) => void;
};
