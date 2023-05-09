export type PageType = 'request' | 'timeOff' | 'confirm' | 'allDone';

export type FooterProps = {
  onCancel?: () => void;
  onApply?: () => void;
  variant: PageType;
};
