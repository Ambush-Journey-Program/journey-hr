import styled, {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { SizeProp, ColorProp, ButtonType } from './types';

type ButtonProps = {
  haveChildren: boolean;
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
  [key: string]: {
    [key: string]: FlattenInterpolation<ThemeProps<ColorProp>>;
  };
};

const childrenPadding = css`
  padding: 10px 14px;
`;

const variants: Variants = {
  large: css`
    font-size: 22px;

    svg {
      align-self: center;
      width: 1.125rem;
      height: 1.125rem;
    }
  `,

  medium: css`
    font-size: 1.125rem;

    svg {
      align-self: center;
      width: 1.031rem;
      height: 1.031rem;
    }
  `,

  small: css`
    font-size: 1rem;

    svg {
      align-self: center;
      width: 0.938rem;
      height: 0.938rem;
    }
  `,
};

const colorVariants: ColorVariant = {
  primary: {
    default: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.brandColors.red};

      &:focus {
        opacity: 70%;
        background-color: ${(props) => props.theme.color.button.primary};
        box-shadow: 0px 0px 0px 4px rgba(236, 109, 117, 0.2);
      }

      &:hover {
        background-color: ${(props) => props.theme.color.button.primaryHover};
      }
    `,

    outlined: css`
      color: ${(props) => props.theme.color.button.primary};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.button.primary};

      svg {
        fill: ${(props) => props.theme.color.button.primary};
      }

      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(236, 109, 117, 0.2);
      }

      &:hover {
        background-color: rgba(236, 109, 117, 0.1);
      }
    `,

    ghost: css`
      color: ${(props) => props.theme.color.button.primary};
      background-color: transparent;

      svg {
        fill: ${(props) => props.theme.color.button.primary};
      }

      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(236, 109, 117, 0.25);
      }

      &:hover {
        color: ${(props) => props.theme.color.button.primaryHover};

        svg {
          fill: ${(props) => props.theme.color.button.primaryHover};
        }
      }
    `,
  },

  secondary: {
    default: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.button.secondary};

      &:focus {
        opacity: 70%;
        background-color: ${(props) => props.theme.color.button.secondary};
        box-shadow: 0px 0px 0px 4px rgba(155, 154, 214, 0.2);
      }

      &:hover {
        background-color: ${(props) => props.theme.color.button.secondaryHover};
      }
    `,
    outlined: css`
      color: ${(props) => props.theme.color.button.secondary};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.button.secondary};

      svg {
        fill: ${(props) => props.theme.color.button.secondary};
      }

      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(155, 154, 214, 0.2);
      }

      &:hover {
        color: ${(props) => props.theme.color.button.secondaryHover};
        background-color: ${(props) =>
          props.theme.color.contrasts.lightContrast};

        svg {
          fill: ${(props) => props.theme.color.button.secondaryHover};
        }
      }
    `,

    ghost: css`
      color: ${(props) => props.theme.color.button.secondary};
      background-color: transparent;

      svg {
        fill: ${(props) => props.theme.color.button.secondary};
      }

      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(155, 154, 214, 0.2);
      }

      &:hover {
        color: ${(props) => props.theme.color.button.secondaryHover};

        svg {
          fill: ${(props) => props.theme.color.button.secondaryHover};
        }
      }
    `,
  },

  alternative: {
    default: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.brandColors.dark};

      &:focus {
        background-color: ${(props) => props.theme.color.brandColors.dark};
        box-shadow: 0px 0px 0px 4px rgba(92, 76, 115, 0.2);
      }

      &:hover {
        background-color: ${(props) => props.theme.color.contrasts.lowContrast};
      }
    `,

    outlined: css`
      color: ${(props) => props.theme.color.brandColors.dark};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.brandColors.dark};

      svg {
        fill: ${(props) => props.theme.color.brandColors.dark};
      }

      &:focus {
        background-color: rgba(255, 255, 255, 1e-6);
        box-shadow: 0px 0px 0px 4px rgba(92, 76, 115, 0.2);
      }

      &:hover {
        background-color: ${(props) =>
          props.theme.color.contrasts.lightContrast};
      }
    `,

    ghost: css`
      color: ${(props) => props.theme.color.contrasts.highContrast};
      background-color: transparent;

      svg {
        fill: ${(props) => props.theme.color.contrasts.highContrast};
      }

      &:focus {
        box-shadow: 0px 0px 0px 4px rgba(92, 76, 115, 0.25);
      }

      &:hover {
        color: ${(props) => props.theme.color.contrasts.highContrast};
      }
    `,
  },
};

const disabledButton: DisabledButton = {
  default: {
    primary: css`
      opacity: 70%;

      &:hover {
        background-color: ${(props) => props.theme.color.button.primary};
      }
    `,
    secondary: css`
      opacity: 70%;

      &:hover {
        background-color: ${(props) => props.theme.color.button.secondary};
      }
    `,
    alternative: css`
      opacity: 70%;

      &:hover {
        background-color: ${(props) => props.theme.color.brandColors.dark};
      }
    `,
  },
  outlined: {
    primary: css`
      opacity: 70%;

      &:hover {
        background-color: transparent;
      }
    `,
    secondary: css`
      opacity: 70%;

      &:hover {
        color: ${(props) => props.theme.color.button.secondary};
        background-color: transparent;

        svg {
          fill: ${(props) => props.theme.color.button.secondary};
        }
      }
    `,
    alternative: css`
      opacity: 70%;

      &:hover {
        background-color: transparent;
      }
    `,
  },
  ghost: {
    primary: css`
      opacity: 70%;

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.color.button.primary};

        svg {
          fill: ${(props) => props.theme.color.button.primary};
        }
      }
    `,
    secondary: css`
      opacity: 70%;

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.color.button.secondary};

        svg {
          fill: ${(props) => props.theme.color.button.secondary};
        }
      }
    `,
    alternative: css`
      opacity: 70%;

      &:hover {
        background-color: transparent;
      }
    `,
  },
};

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  font-weight: 600;
  line-height: 150%;
  font-family: Mundial, sans-serif;
  border-radius: 50px;
  gap: 0.375rem;
  cursor: pointer;

  ${({ haveChildren }) => !haveChildren && childrenPadding}
  ${({ sizeVariant }) => variants[sizeVariant]}
  ${({ variant, color }) => colorVariants[color]?.[variant]}
  ${({ disabled, variant, color }) =>
    disabled && disabledButton[variant]?.[color]}
`;
