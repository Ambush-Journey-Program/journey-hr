import styled, { css } from 'styled-components';
import { SizeProp, ColorProp, ButtonType } from './types';

type ButtonProps = {
  haveChildren: boolean;
  sizeVariant: SizeProp;
  color: ColorProp;
  variant: ButtonType;
};

const childrenPadding = css`
  padding: 10px;
`;

const variants = {
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

const colorVariants = {
  primary: {
    default: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.brandColors.red};

      &:focus {
        opacity: 0.7;
        background-color: ${(props) => props.theme.color.button.primary};
        box-shadow: 0 0 0 4px rgba(236, 109, 117, 20%);
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
        color: ${(props) => props.theme.color.button.primary};
      }

      &:focus {
        box-shadow: 0 0 0 4px rgba(236, 109, 117, 20%);
      }

      &:hover {
        background-color: rgba(236, 109, 117, 10%);
      }
    `,

    ghost: css`
      color: ${(props) => props.theme.color.button.primary};
      background-color: transparent;

      svg {
        color: ${(props) => props.theme.color.button.primary};
      }

      &:focus {
        box-shadow: 0 0 0 4px rgba(236, 109, 117, 25%);
      }

      &:hover {
        color: ${(props) => props.theme.color.button.primaryHover};

        svg {
          color: ${(props) => props.theme.color.button.primaryHover};
        }
      }
    `,
  },

  secondary: {
    default: css`
      color: ${(props) => props.theme.color.brandColors.light};
      background-color: ${(props) => props.theme.color.button.secondary};

      &:focus {
        opacity: 0.7;
        background-color: ${(props) => props.theme.color.button.secondary};
        box-shadow: 0 0 0 4px rgba(155, 154, 214, 20%);
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
        color: ${(props) => props.theme.color.button.secondary};
      }

      &:focus {
        box-shadow: 0 0 0 4px rgba(155, 154, 214, 20%);
      }

      &:hover {
        color: ${(props) => props.theme.color.button.secondaryHover};
        background-color: ${(props) =>
          props.theme.color.contrasts.lightContrast};

        svg {
          color: ${(props) => props.theme.color.button.secondaryHover};
        }
      }
    `,

    ghost: css`
      color: ${(props) => props.theme.color.button.secondary};
      background-color: transparent;

      svg {
        color: ${(props) => props.theme.color.button.secondary};
      }

      &:focus {
        box-shadow: 0 0 0 4px rgba(155, 154, 214, 20%);
      }

      &:hover {
        color: ${(props) => props.theme.color.button.secondaryHover};

        svg {
          color: ${(props) => props.theme.color.button.secondaryHover};
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
        box-shadow: 0 0 0 4px rgba(92, 76, 115, 20%);
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
        color: ${(props) => props.theme.color.brandColors.dark};
      }

      &:focus {
        background-color: rgba(255, 255, 255, 0.0001%);
        box-shadow: 0 0 0 4px rgba(92, 76, 115, 20%);
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
        color: ${(props) => props.theme.color.contrasts.highContrast};
      }

      &:focus {
        box-shadow: 0 0 0 4px rgba(92, 76, 115, 25%);
      }

      &:hover {
        color: ${(props) => props.theme.color.contrasts.highContrast};
      }
    `,
  },
};

const disabledButton = {
  default: {
    primary: css`
      opacity: 0.7;

      &:hover {
        background-color: ${(props) => props.theme.color.button.primary};
      }
    `,
    secondary: css`
      opacity: 0.7;

      &:hover {
        background-color: ${(props) => props.theme.color.button.secondary};
      }
    `,
    alternative: css`
      opacity: 0.7;

      &:hover {
        background-color: ${(props) => props.theme.color.brandColors.dark};
      }
    `,
  },
  outlined: {
    primary: css`
      opacity: 0.7;

      &:hover {
        background-color: transparent;
      }
    `,
    secondary: css`
      opacity: 0.7;

      &:hover {
        color: ${(props) => props.theme.color.button.secondary};
        background-color: transparent;

        svg {
          color: ${(props) => props.theme.color.button.secondary};
        }
      }
    `,
    alternative: css`
      opacity: 0.7;

      &:hover {
        background-color: transparent;
      }
    `,
  },
  ghost: {
    primary: css`
      opacity: 0.7;

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.color.button.primary};

        svg {
          color: ${(props) => props.theme.color.button.primary};
        }
      }
    `,
    secondary: css`
      opacity: 0.7;

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.color.button.secondary};

        svg {
          color: ${(props) => props.theme.color.button.secondary};
        }
      }
    `,
    alternative: css`
      opacity: 0.7;

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
  font-family: ${prop => prop.theme.font.fontFamilyTitle};
  border-radius: 50px;
  gap: 0.375rem;
  cursor: pointer;

  svg path {
    stroke-width: 2.2px;
    margin-bottom: 0;
  }

  ${({ haveChildren }) => !haveChildren && childrenPadding}
  ${({ sizeVariant }) => variants[sizeVariant]}
  ${({ variant, color }) => colorVariants[color]?.[variant]}
  ${({ disabled, variant, color }) =>
    disabled && disabledButton[variant]?.[color]}
   ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;
