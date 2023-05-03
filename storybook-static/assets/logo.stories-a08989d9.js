var a=Object.defineProperty;var t=(o,e)=>a(o,"name",{value:e,configurable:!0});import{H as s,C as i,a as n}from"./styled-components.browser.esm-017417a4.js";import{L as r}from"./logo-b1bd5a3e.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";const h={component:r,title:"UI/Logo",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Logo } from './logo';
import { ILogoProps } from './types';

export default {
  component: Logo,
  title: 'UI/Logo',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Logo',
              url: 'https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=2%3A890&t=WcI5jns5q5TpQbxH-1',
              description: 'This is the Figma of the Logo and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const LogoStoryWrapper = styled.div<{ alternate?: boolean }>\`
  padding: 32px;
  width: 200px;
  \${(props) =>
    props.alternate &&
    css\`
      background-color: darkgray;
    \`}
\`;

const Template: Story<ILogoProps> = (args) => {
  return (
    <LogoStoryWrapper alternate={args.colorVariant === 'light'}>
      <Logo {...args} />
    </LogoStoryWrapper>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  variant: 'horizontal',
  colorVariant: 'dark',
};
`,locationsMap:{"select-card-story":{startLoc:{col:36,line:37},endLoc:{col:1,line:43},startBody:{col:36,line:37},endBody:{col:1,line:43}}}},relatedLinks:{sections:[{title:"Figma",links:[{text:"Logo",url:"https://www.figma.com/file/EUiXXvcSD4TdupzlRRd8Uk/Ambush-Tokens?node-id=2%3A890&t=WcI5jns5q5TpQbxH-1",description:"This is the Figma of the Logo and its variations."}]}]}}},l=s.div`
  padding: 32px;
  width: 200px;
  ${o=>o.alternate&&i`
      background-color: darkgray;
    `}
`,p=t(o=>n(l,{alternate:o.colorVariant==="light",children:n(r,{...o})}),"Template"),c=p.bind({});c.args={variant:"horizontal",colorVariant:"dark"};const S=["SelectCardStory"];export{c as SelectCardStory,S as __namedExportsOrder,h as default};
//# sourceMappingURL=logo.stories-a08989d9.js.map
