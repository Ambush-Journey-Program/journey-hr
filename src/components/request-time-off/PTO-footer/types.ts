export type PageType = 'request' | 'timeOff' | 'confirm' | 'allDone';

export type FooterProps = {
  cancel?: () => void;
  apply?: () => void;
  variant: PageType;
};
