var e=Object.defineProperty;var n=(t,i)=>e(t,"name",{value:i,configurable:!0});import{a as r}from"./styled-components.browser.esm-017417a4.js";import{B as o}from"./button-c8f1e04e.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";const p={component:o,title:"UI/Button",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Button } from './button';
import { ButtonProps } from './types';

export default {
  component: Button,
  title: 'UI/Button',
  parameters: {
    isLoading: false,
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Buttons ',
              url:
                'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1039%3A469&t=i4ddngmKFF26EqjW-1',
              description: 'This is the Figma of the Button and its variations',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Button',
  disabled: false,
  color: 'primary',
  sizeVariant: 'medium',
  variant: 'default',
};
`,locationsMap:{"button-story":{startLoc:{col:37,line:28},endLoc:{col:1,line:30},startBody:{col:37,line:28},endBody:{col:1,line:30}}}},isLoading:!1,relatedLinks:{sections:[{title:"Figma",links:[{text:"Buttons ",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1039%3A469&t=i4ddngmKFF26EqjW-1",description:"This is the Figma of the Button and its variations"}]}]}}},s=n(t=>r(o,{...t}),"Template"),a=s.bind({});a.args={children:"Button",disabled:!1,color:"primary",sizeVariant:"medium",variant:"default"};const B=["ButtonStory"];export{a as ButtonStory,B as __namedExportsOrder,p as default};
//# sourceMappingURL=button.stories-9d3f5905.js.map
