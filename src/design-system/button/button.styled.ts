import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

type StyleProps = {
    sizeVariant: string;
}


type Variants = {
    [key: string]: FlattenSimpleInterpolation;
}

const variants:Variants = {
    default: css`
        width: 94px;
        height: 47px;
        font-size: 18px;
    `,
  };

  const disabledButton = css`
   background-color: ${props => props.theme.color.disable};
   &:hover{
    opacity: 1;
   }
  `;

export const ButtonStyle = styled.button<StyleProps>`
    font-weight: 600;
    line-height: 150%;
    font-family: Mundial, sans-serif;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.red};
    border-radius: 50px;

    &:hover{
        opacity: 70%;
    }

    ${({ sizeVariant }) => variants[sizeVariant]}
    ${({disabled}) => disabled && disabledButton}
`;


