import { UsersIcon } from '@heroicons/react/24/outline';
import styled, { css } from 'styled-components';

const errorDisplay = css`
  border-color: ${(props) => props.theme.color.auxiliary.error};
  box-shadow: 0 0 0 0.25rem rgba(217, 73, 73, 0.2);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: ${(props) => props.theme.color.auxiliary.white};
  box-shadow: ${(props) => props.theme.shadows.cream};
  border-radius: 1.25rem;
  padding: 2.5rem;
`;

export const SearchBox = styled.div<{ error: boolean }>`
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 0.063rem solid ${(props) => props.theme.color.contrasts.lowContrast};
  border-radius: 0.75rem;
  max-width: 24.063rem;
  margin: 0.25rem 0;
  ${({ error }) => error && errorDisplay};
`;
export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  border: none;
  font-family: 'Mundial';
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 150%;

  color: ${(props) => props.theme.color.contrasts.highContrast};
  ::placeholder {
    color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
  flex-grow: 1;
`;
export const DoubleUserIcon = styled(UsersIcon)`
  width: 1rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
