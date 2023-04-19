export type PositionsType = 'right' | 'top' | 'bottom' | 'left';

export type ITooltipProps = {
  text: string;
  variantPosition?: PositionsType;
  children: JSX.Element | string;
};
