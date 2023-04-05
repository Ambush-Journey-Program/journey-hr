export type GuestListProps = {
  guestList: Guests[];
  onDelete: () => void;
};

export type Guests = {
  guest: Profile;
};

type Profile = {
  name: string;
  team: string;
};
