export type GuestListProps = {
  guestsList: Guests[];
  onDelete?: () => void;
};

export type Guests = {
  guest: Profile;
};

export type Profile = {
  id: string;
  name: string;
  team: string;
};
