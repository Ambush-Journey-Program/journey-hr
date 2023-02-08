import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ButtonSizeProp } from "./types";

type StyleProps = {
  sizeVariant: ButtonSizeProp;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
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

const disabledButton = css`
  background-color: ${(props) => props.theme.color.disable};
  &:hover {
    opacity: 1;
  }
`;

export const ButtonStyle = styled.button<StyleProps>`
  padding: 10px 24px;
  font-weight: 600;
  line-height: 150%;
  font-family: Mundial, sans-serif;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.red};
  border-radius: 50px;

  &:hover {
    opacity: 70%;
  }

  ${({ sizeVariant }) => variants[sizeVariant]}
  ${({ disabled }) => disabled && disabledButton}
`;
