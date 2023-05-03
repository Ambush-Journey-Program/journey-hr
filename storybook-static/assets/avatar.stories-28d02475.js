var s=Object.defineProperty;var e=(t,a)=>s(t,"name",{value:a,configurable:!0});import{a as r,F as o}from"./styled-components.browser.esm-017417a4.js";import{t as i}from"./theme-94f45b2f.js";import{A as n}from"./avatar-7d72cb7f.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./devices-01550430.js";const g={component:n,title:"UI/Avatar",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Avatar } from './avatar';
import { AvatarProps } from './types';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  parameters: {
    src: 'src/design-system/avatar/User-Photo.png',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'User Avatar ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A695&t=i4ddngmKFF26EqjW-1',
              description: 'This is the Figma of the Avatar Component',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Avatar {...args} />
    </ThemeProvider>
  );
};

export const SelectCardStory = Template.bind({});
SelectCardStory.args = {
  src: 'src/design-system/avatar/User-Photo.png',
  sizeVariant: 'small',
};
`,locationsMap:{"select-card-story":{startLoc:{col:37,line:29},endLoc:{col:1,line:35},startBody:{col:37,line:29},endBody:{col:1,line:35}}}},src:"src/design-system/avatar/User-Photo.png",relatedLinks:{sections:[{title:"Figma",links:[{text:"User Avatar ",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A695&t=i4ddngmKFF26EqjW-1",description:"This is the Figma of the Avatar Component"}]}]}}},m=e(t=>r(o,{theme:i,children:r(n,{...t})}),"Template"),c=m.bind({});c.args={src:"src/design-system/avatar/User-Photo.png",sizeVariant:"small"};const f=["SelectCardStory"];export{c as SelectCardStory,f as __namedExportsOrder,g as default};
//# sourceMappingURL=avatar.stories-28d02475.js.map
