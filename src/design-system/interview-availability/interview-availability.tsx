import { FC } from 'react'

import { Wrapper } from './interview-availability.styled'
import { IInterviewAvailabilityProps } from './types'

export const InterviewAvailability: FC<IInterviewAvailabilityProps> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>
}
