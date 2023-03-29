import styled, {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { SizeProp, ColorProp, ButtonType } from './types';

type ButtonProps = {
  sizeVariant: SizeProp;
  color: ColorProp;
  variant: ButtonType;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
};

type ColorVariant = {
  [key: string]: {
    [key: string]: FlattenInterpolation<ThemeProps<ButtonType>>;
  };
};

type DisabledButton = {
  [key: string]: FlattenInterpolation<ThemeProps<ButtonType>>;
};

const variants: Variants = {
  large: css`
    font-size: 22px;

    svg {
      margin-right: 0.375rem;
      align-self: center;
      width: 1.125rem;
      height: 1.125rem;
    }
  `,

  default: css`
    font-size: 1.125rem;

    svg {
      margin-right: 0.375rem;
      align-self: center;
      width: 1.031rem;
      height: 1.031rem;
    }
  `,

  small: css`
    padding: 8px 24px 7px 24px;
    font-size: 1rem;

    svg {
      margin-right: 0.375rem;
      align-self: center;
      width: 0.938rem;
      height: 0.938rem;
    }
  `,
};

const colorVariants: ColorVariant = {
  defaultColor: {
    defaultType: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.brandColors.red};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.brandColors.red};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.brandColors.red};

      &:hover {
        background-color: ${(props) => props.theme.color.button.primary};
      }
    `,
    ghost: css`
      color: ${(props) => props.theme.color.contrasts.highContrast};
      background-color: transparent;

      svg {
        fill: ${(props) => props.theme.color.contrasts.highContrast};
      }

      &:hover {
        opacity: 1;
        border-bottom: solid 2px
          ${(props) => props.theme.color.brandColors.purple};
        border-radius: 0;
      }
    `,
  },

  blue: {
    defaultType: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.brandColors.purple};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.brandColors.purple};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.brandColors.purple};

      &:hover {
        background-color: ${(props) => props.theme.color.button.secondaryHover};
        opacity: 1;
      }
    `,
  },

  purple: {
    defaultType: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.contrasts.highContrast};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.contrasts.highContrast};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.contrasts.highContrast};

      &:hover {
        background-color: ${(props) => props.theme.color.button.secondaryHover};
        opacity: 1;
      }
    `,
  },
};

const disabledButton: DisabledButton = {
  defaultType: css`
    opacity: 70%;
  `,
  outlined: css`
    background-color: transparent;
    opacity: 70%;
  `,
  ghost: css`
    opacity: 70%;
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  padding: 10px 24px;
  font-weight: 600;
  line-height: 150%;
  font-family: Mundial, sans-serif;
  border-radius: 50px;

  &:hover {
    opacity: 70%;
  }

  ${({ sizeVariant }) => variants[sizeVariant]}
  ${({ variant, color }) => colorVariants[color]?.[variant]}

  ${({ disabled, variant }) => disabled && disabledButton[variant]}
`;
