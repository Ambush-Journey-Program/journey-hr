export type Profile = {
  id: string;
  name: string;
  team: string;
};
export type GuestListProps = {
  guestsList: Guests[];
  onDelete?(id: string): void;
};

export type Guests = {
  guest: Profile;
};
