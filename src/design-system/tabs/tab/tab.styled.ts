import { Paragraph } from '@/design-system/typography';
import styled from 'styled-components';

export const Tab = styled.a`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 0.625rem;
  color: ${(props) => props.theme.color.brandColors.dark};
  background-color: transparent;
  border-bottom: solid 0.25rem
    ${(props) => props.theme.color.contrasts.lightContrast};
  cursor: pointer;
  svg {
    align-self: center;
    margin-right: 0.375rem;
    width: 0.938rem;
    height: 0.938rem;
    fill: ${(props) => props.theme.color.brandColors.dark};
  }

  p:hover {
    color: ${(props) => props.theme.color.button.secondaryHover};
    svg {
      fill: ${(props) => props.theme.color.button.secondaryHover};
    }
  }
  p:focus {
    box-shadow: none;
    color: ${(props) => props.theme.color.button.secondary};
    svg {
      fill: ${(props) => props.theme.color.button.secondary};
    }
  }
  &:disabled {
    color: ${(props) => props.theme.color.button.disabled};
    svg {
      fill: ${(props) => props.theme.color.button.disabled};
    }
  }
`;

export const ParagraphStyle = styled(Paragraph)`
  display: flex;
`;
