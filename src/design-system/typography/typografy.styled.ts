import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { devices } from '../../styles/devices';
import { TitleProps, SubtitleProps, ParagraphsProps } from './types';
type TitleStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

type SubtitleStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

type ParagraphsStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

type WeightStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

// ********************* Title ******************

const titleEl: TitleStyle = {
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

export const TitleStyled = styled.text<TitleProps>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ titleVariant }) => titleEl[titleVariant]}
`;

//  ********************** Subtitle *******************

const subtitleEl: SubtitleStyle = {
  s1: css`
    font-size: 2rem;

    @media ${devices.tablet} {
      font-size: 2.5rem;
    }

    @media ${devices.desktop} {
      font-size: 3rem;
    }
  `,

  s2: css`
    font-size: 1.75rem;

    @media ${devices.tablet} {
      font-size: 2rem;
    }

    @media ${devices.desktop} {
      font-size: 2.5rem;
    }
  `,

  s3: css`
    font-size: 1.5rem;

    @media ${devices.tablet} {
      font-size: 1.75rem;
    }

    @media ${devices.desktop} {
      font-size: 2rem;
    }
  `,

  s4: css`
    font-size: 1.25rem;

    @media ${devices.tablet} {
      font-size: 1.5rem;
    }

    @media ${devices.desktop} {
      font-size: 1.75rem;
    }
  `,

  s5: css`
    font-size: 1.125rem;

    @media ${devices.tablet} {
      font-size: 1.25rem;
    }

    @media ${devices.desktop} {
      font-size: 1.5rem;
    }
  `,

  s6: css`
    font-size: 1rem;

    @media ${devices.tablet} {
      font-size: 1.125rem;
    }

    @media ${devices.desktop} {
      font-size: 1.25;
    }
  `,
};

export const SubtitleStyled = styled.text<SubtitleProps>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ subtitleVariant }) => subtitleEl[subtitleVariant]}
`;

//  ********************** Paragraphs *******************

const paragraphsEl: ParagraphsStyle = {
  giant: css`
    font-size: 1.5rem;
  `,

  extralarge: css`
    font-size: 1.375rem;
  `,

  large: css`
    font-size: 1.25rem;
  `,

  medium: css`
    font-size: 1.125rem;
  `,

  default: css`
    font-size: 1rem;
  `,

  small: css`
    font-size: 0.875rem;
  `,

  extrasmall: css`
    font-size: 0.75rem;
  `,

  tiny: css`
    font-size: 0.625rem;
  `,
};

const paragraphsWeightEl: WeightStyle = {
  hair: css`
    font-weight: 200;
  `,

  light: css`
    font-weight: 400;
  `,

  demibold: css`
    font-weight: 600;
  `,
};

export const ParagraphStyled = styled.text<ParagraphsProps>`
  font-family: 'Mundial', sans-serif;
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ sizeVariant }) => paragraphsEl[sizeVariant]}
  ${({ fontWeight }) => paragraphsWeightEl[fontWeight]}
`;
