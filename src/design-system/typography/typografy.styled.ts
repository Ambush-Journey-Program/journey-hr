import styled, { css, ThemeProps } from 'styled-components';
import { SizeProp, ColorProp } from './types';

type TextProps = {
  sizeVariant: SizeProp;
  color: ColorProp;
};

type Title = {
  [key: string]: any;
};

const Title: Title = {
  large: css`
    font-size: 22px;
  `,

  default: css`
    font-size: 1.125rem;
  `,

  small: css`
    padding: 8px 24px 7px 24px;
    font-size: 1rem;
    color: ${(props) => props.theme.color.grayish};
  `,

  large: css`
    font-size: 22px;
  `,

  large: css`
    font-size: 22px;
  `,

  large: css`
    font-size: 22px;
  `,
};

export const ButtonStyle = styled.text<TextProps>`
  display: flex;
  padding: 10px 24px;
  font-weight: 600;
  line-height: 150%;
  font-family: Mundial, sans-serif;
  border-radius: 50px;

  &:hover {
    opacity: 70%;
  }

  ${({ sizeVariant }) => variants[sizeVariant]}
`;
