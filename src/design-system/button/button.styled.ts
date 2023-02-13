import styled, {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { SizeProp, ColorProp } from "./types";

type ButtonProps = {
  sizeVariant: SizeProp;
  colorVariant: ColorProp;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
};

type ColorVariant = {
  [key: string]: FlattenInterpolation<ThemeProps<any>>;
};

const variants: Variants = {
  large: css`
    font-size: 22px;
  `,

  default: css`
    font-size: 18px;
  `,

  small: css`
    padding: 8px 24px 7px 24px;
    font-size: 16px;
  `,
};

const colorVariants: ColorVariant = {
  default: css`
    background-color: ${(props) => props.theme.color.red};
  `,
  blue: css`
    background-color: ${(props) => props.theme.color.blue};
  `,
  purple: css`
    background-color: ${(props) => props.theme.color.purple};
  `,
};

const disabledButton = css`
  background-color: ${(props) => props.theme.color.disable};
  &:hover {
    opacity: 1;
  }
`;

export const ButtonStyle = styled.button<ButtonProps>`
  padding: 10px 24px;
  font-weight: 600;
  line-height: 150%;
  font-family: Mundial, sans-serif;
  color: ${(props) => props.theme.color.white};
  border-radius: 50px;

  &:hover {
    opacity: 70%;
  }

  ${({ sizeVariant }) => variants[sizeVariant]}
  ${({ colorVariant }) => colorVariants[colorVariant]}
  ${({ disabled }) => disabled && disabledButton}
`;
