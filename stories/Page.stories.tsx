import { Meta, Story } from '@storybook/react';
import React from 'react';
import * as HeaderStories from './Header.stories';
import { Page, PageProps } from './Page';

type TemplateType = Story<PageProps>;

export default {
  title: 'Example/Page',
  component: Page,
} as Meta<PageProps>;

const Template: TemplateType = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({}) as TemplateType;
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({}) as TemplateType;
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
