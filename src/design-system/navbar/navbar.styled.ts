import styled, { css } from 'styled-components';
import { ColorProps } from './type';

type LinkColors = {
  colors: ColorProps;
};

export const NavBarWrapper = styled.div`
  width: 62rem;
  margin: 0 auto;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 1.25rem 0;
`;

export const LinkContainer = styled.ul<LinkColors>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 ${(props) => props.theme.spacings.spacing08};
  width: 100%;
  max-width: 100%;
  list-style: none;

  li {
    margin: 0 1.125rem;

    a {
      text-decoration: none;
      font-size: ${(props) => props.theme.spacings.spacing04};
      font-weight: 600;
      ${({ colors }) => colorsVariants[colors]};
    }
  }

  li:first-of-type {
    margin-left: 0;
  }

  li:last-of-type {
    margin-right: 0;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 3.75rem 2.5rem;

  span {
    width: 7.75rem;
    height: 1.5625rem;
  }
  h1 {
    margin-left: ${(props) => props.theme.spacings.spacing02};
    color: ${(props) => props.theme.color.brandColors.dark};
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

const colorsVariants = {
  light: css`
    color: ${(props) => props.theme.color.brandColors.light};
  `,

  dark: css`
    color: ${(props) => props.theme.color.contrasts.mediumContrast};
  `,
};
