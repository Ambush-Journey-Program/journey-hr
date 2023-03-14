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
      color: ${(props) => props.theme.color.light};
      background-color: ${(props) => props.theme.color.red};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.red};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.red};

      &:hover {
        background-color: ${(props) => props.theme.color.red};
        opacity: 1;
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
        border-bottom: solid 2px ${(props) => props.theme.color.purple};
        border-radius: 0;
      }
    `,
  },

  blue: {
    defaultType: css`
      color: ${(props) => props.theme.color.light};
      background-color: ${(props) => props.theme.color.purple};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.purple};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.purple};

      &:hover {
        background-color: ${(props) => props.theme.color.light};
        opacity: 1;
      }
    `,
  },

  purple: {
    defaultType: css`
      color: ${(props) => props.theme.color.light};
      background-color: ${(props) => props.theme.color.contrasts.highContrast};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.contrasts.highContrast};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.contrasts.highContrast};

      &:hover {
        background-color: ${(props) => props.theme.color.light};
        opacity: 1;
      }
    `,
  },
};

const disabledButton: DisabledButton = {
  defaultType: css`
    background-color: ${(props) => props.theme.color.light};

    &:hover {
      background-color: ${(props) => props.theme.color.light};
      opacity: 1;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${(props) => props.theme.color.light};
    border: solid 1px ${(props) => props.theme.color.light};

    &:hover {
      background-color: transparent;
    }
  `,
  ghost: css`
    color: ${(props) => props.theme.color.contrasts.lowContrast};

    svg {
      fill: ${(props) => props.theme.color.contrasts.lowContrast};
    }

    &:hover {
      border-bottom: none;
    }
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
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
  ${({ variant, color }) => colorVariants[color]?.[variant]}

  ${({ disabled, variant }) => disabled && disabledButton[variant]}
`;
