export type PositionsType = 'right' | 'top' | 'bottom' | 'left';

export interface ITooltipProps {
  text: string;
  variantPosition?: PositionsType;
  children: JSX.Element | string;
}
