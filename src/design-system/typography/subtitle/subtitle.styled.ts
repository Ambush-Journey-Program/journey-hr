import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { devices } from "../../../styles/devices";
import { SubtitleProps } from "./types";

type SubtitleStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

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

export const Subtitle = styled.p<SubtitleProps>`
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ variant }) => subtitleEl[variant]}
`;
