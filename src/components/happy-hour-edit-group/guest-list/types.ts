export interface GuestListProps {
  guestsList: Guests[];
  onDelete?: () => void;
}

export interface Guests {
  guest: Profile;
}

export interface Profile {
  id: string;
  name: string;
  team: string;
}
