var r=Object.defineProperty;var a=(n,t)=>r(n,"name",{value:t,configurable:!0});import{a as o}from"./styled-components.browser.esm-017417a4.js";import{N as e}from"./navbar-98be359b.js";import"./index-86ac2416.js";import"./iframe-e52d0cbe.js";import"./avatar-7d72cb7f.js";import"./devices-01550430.js";import"./cardWrapper-4210e8b5.js";const i=[{url:"/Interviews",label:"Interviews",active:!1},{url:"/Happy-Hour",label:"Happy Hour",active:!1},{url:"/Feedbacks",label:"Feedbacks",active:!1},{url:"/Send-a-invite",label:"Send a Invite",active:!1},{url:"/Shorty",label:"Shorty",active:!1}],f={component:e,title:"UI/Navbar",parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { NavBar } from './navbar';
import { NavBarProps, Link } from './type';

const navLinksJourneyHR: Link[] = [
  {
    url: \`/Interviews\`,
    label: \`Interviews\`,
    active: false,
  },
  {
    url: \`/Happy-Hour\`,
    label: \`Happy Hour\`,
    active: false,
  },
  {
    url: \`/Feedbacks\`,
    label: \`Feedbacks\`,
    active: false,
  },
  {
    url: \`/Send-a-invite\`,
    label: \`Send a Invite\`,
    active: false,
  },
  {
    url: \`/Shorty\`,
    label: \`Shorty\`,
    active: false,
  },
];

export default {
  component: NavBar,
  title: 'UI/Navbar',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'Navbar',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A595&t=i4ddngmKFF26EqjW-1',
              description:
                'This is the Figma of the Navbar and its variations.',
            },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story<NavBarProps> = (args) => {
  return <NavBar {...args} />;
};

export const NavBarStory = Template.bind({});
NavBarStory.args = {
  navigationLinks: navLinksJourneyHR,
  colors: 'dark',
};
`,locationsMap:{"nav-bar-story":{startLoc:{col:37,line:55},endLoc:{col:1,line:57},startBody:{col:37,line:55},endBody:{col:1,line:57}}}},relatedLinks:{sections:[{title:"Figma",links:[{text:"Navbar",url:"https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=1045%3A595&t=i4ddngmKFF26EqjW-1",description:"This is the Figma of the Navbar and its variations."}]}]}}},s=a(n=>o(e,{...n}),"Template"),l=s.bind({});l.args={navigationLinks:i,colors:"dark"};const k=["NavBarStory"];export{l as NavBarStory,k as __namedExportsOrder,f as default};
//# sourceMappingURL=navbar.stories-59055dee.js.map
