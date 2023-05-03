import { devices } from '@/styles/devices';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { FooterProps } from './types';

type PageVariants = {
  [key: string]: FlattenSimpleInterpolation;
};

const Page: PageVariants = {
  request: css`
    & .confirmationButon {
      display: none;
    }
    & .cancelButon {
      display: block;
    }
    & .fowardButon {
      display: block;
    }
  `,

  timeOff: css`
    & .confirmationButon {
      display: none;
    }
    & .cancelButon {
      display: block;
    }
    & .fowardButon {
      display: block;
    }
  `,

  confirm: css`
    & .confirmationButon {
      display: block;
    }
    & .cancelButon {
      display: none;
    }
    & .fowardButon {
      display: none;
    }
  `,

  allDone: css`
    & {
      justify-content: center;
    }
    & .confirmationButon {
      display: none;
    }
    & .cancelButon {
      display: none;
    }
    & .fowardButon {
      display: block;
    }
  `,
};

export const Footer = styled.div<FooterProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
  width: 100%;
  gap: 8px;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.color.contrasts.lightContrast};
  border-radius: 0px 0px 20px 20px;

  @media ${devices.tablet} {
    padding: 40px 20px;
  }

  @media ${devices.mobile} {
    flex-direction: column;
    & .button {
      width: 100%;
    }
  }
  ${({ variant }) => Page[variant]}
`;
