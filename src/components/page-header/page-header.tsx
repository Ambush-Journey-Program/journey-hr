import { CardWrapper, Subtitle, Title } from '@/design-system';
import { Paragraph } from '@/design-system/typography/paragraphs/paragraphs.styled';
import { IPageHeaderProps } from './types';

export function PageHeader({ title, subtitle }: IPageHeaderProps) {
  return (
    <CardWrapper>
      <Title variant={'h3'}>{title}</Title>
      <Paragraph size="large" fontWeight="hair" colorVariant="dark">
        {subtitle}
      </Paragraph>
    </CardWrapper>
  );
}
