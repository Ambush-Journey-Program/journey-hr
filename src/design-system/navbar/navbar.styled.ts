import styled from 'styled-components';
import { devices } from '../../styles/theme';

export const NavBarWrapper = styled.div`
  width: 992px;
  margin: 0 auto;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 1.25rem 0;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }

  @media ${devices.mobile} {
  }
`;

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 6rem;
  width: 100%;
  max-width: 100%;
  list-style: none;

  li {
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      color: ${(props) => props.theme.color.purple};
    }
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 3.75rem 2.5rem;
  justify-content: space-between;

  span {
    margin-left: 0.5625rem;
    color: ${(props) => props.theme.color.darkPurple};
    font-size: 18px;
    font-weight: 700;
  }
`;
