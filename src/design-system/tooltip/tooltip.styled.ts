import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { PositionsType } from './types';

export const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  cursor: pointer;
`;
export type StyledProps = {
  variantPosition: PositionsType;
};
type Variants = {
  [key: string]: FlattenInterpolation<ThemeProps<StyledProps>>;
};
const variants: Variants = {
  left: css`
    transform: translateY(-50%);
    top: 50%;
    right: calc(100% + 15px);
    &:after {
      border-color: transparent transparent transparent #${(props) => props.theme.color.auxiliary.white};
      left: calc(100% + -1.5px);
      top: calc(50% + -0.5rem);
      transform: rotate(-90deg);
    }
  `,
  right: css`
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% + 15px);
    &:after {
      border-color: transparent #${(props) => props.theme.color.auxiliary.white}
        transparent transparent;
      right: calc(100% + -1.5px);
      left: unset;
      top: calc(50% - 0.5rem);
      transform: rotate(90deg);
    }
  `,
  bottom: css`
    top: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);
    &:after {
      border-color: transparent transparent #${(props) =>
          props.theme.color.auxiliary.white} transparent;
      top: unset;
      width: 1px;
      bottom: 100%;
      left: calc(50% - 0.5rem);
      transform: rotate(180deg);
    }
  `,
  top: css`
    bottom: calc(100% + 15px);
    left: 50%;
    transform: translateX(-50%);
  `,
  default: css``,
};

export const TooltipBox = styled.span<StyledProps>`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.color.auxiliary.white};
  color: ${(props) => props.theme.color.contrasts.highContrast};
  text-align: center;
  border-radius: 0.938rem;
  padding: 0.75rem;
  min-width: 6.25rem;
  max-width: 12.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  font-family: ${prop => prop.theme.font.fontFamilyBody};
  box-shadow: 0 0.25rem 0.875rem rgba(0, 0, 0, 0.15),
    0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  overflow-wrap: break-word;
  &:after {
    content: '';
    z-index: 10;
    position: absolute;
    width: 0.063rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${(props) => props.theme.color.auxiliary.white} transparent
      transparent transparent;
    left: calc(50% - 0.5rem);
    top: 100%;
  }
  ${({ variantPosition }) => variants[variantPosition]}
`;
