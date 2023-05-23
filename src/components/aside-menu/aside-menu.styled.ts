import styled from 'styled-components';

export const Menu = styled.div`
  width: 17.375rem;
  svg {
    width: 7.125rem;
  }
`;

export const LogoContainer = styled.div`
  padding: 2.5rem 4.185rem 0;

  span {
    svg {
      height: 2.5rem;
    }
  }
`;

export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.6875rem 0 2.6875rem;
`;

export const ListItem = styled.li`
  padding: 0.65625rem 0 0.65625rem 1.614375rem;

  a {
    display: flex;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: ${(props) => props.theme.color.contrasts.lowContrast};

    svg {
      padding-right: 0.364375rem;
      width: 1.5rem;
    }
  }

  :hover {
    background-color: ${(props) => props.theme.color.contrasts.lightContrast};
    border-radius: 25px;
    a {
      color: ${(props) => props.theme.color.button.secondaryHover};

      svg {
        ${(props) => props.theme.color.button.secondaryHover};
      }
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 0.375rem;
  padding: 2.5rem;
`;

export const ButtonContainer = styled.div`
  padding: 3.75rem 5.375rem;

  button {
    font-size: 1rem;
    padding: 0;
  }
  svg {
    width: 1rem;
  }
`;
