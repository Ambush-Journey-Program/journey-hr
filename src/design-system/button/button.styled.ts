import styled, { css, FlattenSimpleInterpolation } from "styled-components";

type StyleProps = {
  sizeVariant: string;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
};

const variants: Variants = {
  large: css`
    height: 53px;
    font-size: 22px;
  `,

  default: css`
    height: 47px;
    font-size: 18px;
  `,

  small: css`
    height: 39px;
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
  padding: 0 24px;
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
