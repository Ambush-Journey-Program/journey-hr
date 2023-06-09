export type PageType = 'request' | 'timeOff' | 'confirm' | 'allDone';

export type FooterStyleProps = {
  variant: PageType;
};

export type FooterProps = {
  onCancel?: () => void;
  onApply?: () => void;
  variant: PageType;
  disabled?: boolean;
};
