export interface ITooltipProps {
  text: string;
  position?: 'right' | 'top' | 'bottom' | 'left';
  children: JSX.Element | string;
}
