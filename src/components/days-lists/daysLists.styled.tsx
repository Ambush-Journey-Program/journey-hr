import styled from 'styled-components';

export const ListWrapper = styled.ul`
  h5 {
    padding-bottom: 2rem;
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    font-family: ${(props) => props.theme.font.fontFamilyBody};
    color: ${(props) => props.theme.color.button.primary};
  }
`;
