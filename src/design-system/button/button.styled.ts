import styled, {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { SizeProp, ColorProp, ButtonType } from "./types";

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
  defaultColor: {
    defaultType: css`
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.red};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.red};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.red};

      &:hover {
        background-color: ${(props) => props.theme.color.lightred};
        opacity: 1;
      }
    `,
    ghost: css`
      color: ${(props) => props.theme.color.purple};
      background-color: transparent;

      &:hover {
        opacity: 1;
        border-bottom: solid 2px ${(props) => props.theme.color.blue};
        border-radius: 0;
      }
    `,
  },

  blue: {
    defaultType: css`
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.blue}; ;
    `,
    outlined: css`
      color: ${(props) => props.theme.color.blue};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.blue};

      &:hover {
        background-color: ${(props) => props.theme.color.white};
        opacity: 1;
      }
    `,
  },

  purple: {
    defaultType: css`
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.purple};
    `,
    outlined: css`
      color: ${(props) => props.theme.color.purple};
      background-color: transparent;
      border: solid 1px ${(props) => props.theme.color.purple};

      &:hover {
        background-color: ${(props) => props.theme.color.white};
        opacity: 1;
      }
    `,
  },
};

const disabledButton: DisabledButton = {
  defaultType: css`
    background-color: ${(props) => props.theme.color.disable};

    &:hover {
      background-color: ${(props) => props.theme.color.disable};
      opacity: 1;
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${(props) => props.theme.color.disable};
    border: solid 1px ${(props) => props.theme.color.disable};

    &:hover {
      background-color: transparent;
    }
  `,
  ghost: css`
    color: ${(props) => props.theme.color.lightPurple};

    &:hover {
      border-bottom: none;
    }
  `,
};

export const ButtonStyle = styled.button<ButtonProps>`
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
