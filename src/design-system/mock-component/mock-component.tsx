import { type FC } from 'react';

import { Wrapper } from './mock-component.styled';
import { type IMockComponentProps } from './types';

export const MockComponent: FC<IMockComponentProps> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>;
};
