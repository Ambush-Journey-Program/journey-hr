var e=Object.defineProperty;var o=(t,n)=>e(t,"name",{value:n,configurable:!0});import{a as s}from"./styled-components.browser.esm-017417a4.js";import{T as i}from"./tooltip-49cecdc0.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";const T={component:i,title:"UI/Tooltip",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Tooltip } from './tooltip';

import { ITooltipProps } from './types';

export default {
  component: Tooltip,
  title: 'UI/Tooltip',
  parameters: {
    children: 'Teste',
    position: '',
    text: 'Copied!',
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Tooltip',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=48%3A71&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Tooltip and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<ITooltipProps> = (args) => {
  return <Tooltip {...args} />;
};

export const TooltipStory = Template.bind({});

TooltipStory.args = {
  children: 'Test',
  variantPosition: 'top',
  text: 'Copied!',
};
`,locationsMap:{"tooltip-story":{startLoc:{col:39,line:31},endLoc:{col:1,line:33},startBody:{col:39,line:31},endBody:{col:1,line:33}}}},children:"Teste",position:"",text:"Copied!",relatedLinks:{sections:[{title:"Figma",links:[{text:"Tooltip",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=48%3A71&t=i4ddngmKFF26EqjW-1",description:"This is the Figma of the Tooltip and its variations."}]}]}}},r=o(t=>s(i,{...t}),"Template"),p=r.bind({});p.args={children:"Test",variantPosition:"top",text:"Copied!"};const y=["TooltipStory"];export{p as TooltipStory,y as __namedExportsOrder,T as default};
//# sourceMappingURL=tooltip.stories-070f20de.js.map
