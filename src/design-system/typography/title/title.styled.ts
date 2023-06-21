import styled, { css } from 'styled-components';
import { devices } from '@/styles/devices';
import { TitleProps } from './types';

const titleEl = {
  h1: css`
    font-size: 2rem;

    @media ${devices.tablet} {
      font-size: 2.5rem;
    }

    @media ${devices.desktop} {
      font-size: 3rem;
    }
  `,

  h2: css`
    font-size: 1.75rem;

    @media ${devices.tablet} {
      font-size: 2rem;
    }

    @media ${devices.desktop} {
      font-size: 2.5rem;
    }
  `,

  h3: css`
    font-size: 1.5rem;

    @media ${devices.tablet} {
      font-size: 1.75rem;
    }

    @media ${devices.desktop} {
      font-size: 2rem;
    }
  `,

  h4: css`
    font-size: 1.25rem;

    @media ${devices.tablet} {
      font-size: 1.5rem;
    }

    @media ${devices.desktop} {
      font-size: 1.75rem;
    }
  `,

  h5: css`
    font-size: 1.125rem;

    @media ${devices.tablet} {
      font-size: 1.25rem;
    }

    @media ${devices.desktop} {
      font-size: 1.5rem;
    }
  `,

  h6: css`
    font-size: 1rem;

    @media ${devices.tablet} {
      font-size: 1.125rem;
    }

    @media ${devices.desktop} {
      font-size: 1.25;
    }
  `,
};

export const Title = styled.div<TitleProps>`
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ variant }) => titleEl[variant]}
`;
