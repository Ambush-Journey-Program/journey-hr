import styled from 'styled-components';

export const ListWrapper = styled.ul`
  h5 {
    padding-bottom: ${(props) => props.theme.spacings.spacing06};
  }

  a {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    font-family: ${(props) => props.theme.font.fontFamilyTitle};
    color: ${(props) => props.theme.color.button.primary};
  }
`;
