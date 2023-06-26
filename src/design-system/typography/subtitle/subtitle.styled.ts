import styled, { css } from 'styled-components';
import { devices } from '@/styles/devices';
import { SubtitleProps } from './types';

const subtitleEl = {
  s1: css`
    font-size: 1.75rem;

    @media ${devices.tablet} {
      font-size: 2rem;
    }

    @media ${devices.desktop} {
      font-size: 2.5rem;
    }
  `,

  s2: css`
    font-size: 1.5rem;

    @media ${devices.tablet} {
      font-size: 1.75rem;
    }

    @media ${devices.desktop} {
      font-size: 2rem;
    }
  `,

  s3: css`
    font-size: 1.25rem;

    @media ${devices.tablet} {
      font-size: 1.5rem;
    }

    @media ${devices.desktop} {
      font-size: 1.75rem;
    }
  `,

  s4: css`
    font-size: 1.125rem;

    @media ${devices.tablet} {
      font-size: 1.25rem;
    }

    @media ${devices.desktop} {
      font-size: 1.5rem;
    }
  `,

  s5: css`
    font-size: 1rem;

    @media ${devices.tablet} {
      font-size: 1.125rem;
    }

    @media ${devices.desktop} {
      font-size: 1.25rem;
    }
  `,

  s6: css`
    font-size: 0.875rem;

    @media ${devices.tablet} {
      font-size: 1rem;
    }

    @media ${devices.desktop} {
      font-size: 1.125;
    }
  `,
};

const subtitleWeightEl = {
  hair: css`
    font-weight: 300;
  `,
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
};

export const Subtitle = styled.p<SubtitleProps>`
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  font-style: normal;
  ${({ fontWeight }) => subtitleWeightEl[fontWeight]}
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ variant }) => subtitleEl[variant]}
`;
