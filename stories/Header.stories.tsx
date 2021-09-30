import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Header, HeaderProps } from './Header';

type TemplateType = Story<HeaderProps>;

export default {
  title: 'Example/Header',
  component: Header,
} as Meta<HeaderProps>;

const Template: TemplateType = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({}) as TemplateType;
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({}) as TemplateType;
LoggedOut.args = {};
