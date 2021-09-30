import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './Button';

type TemplateType = Story<ButtonProps>;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}  as Meta<ButtonProps>;

const Template: TemplateType = (args) => <Button {...args} />;

export const Primary = Template.bind({}) as TemplateType;
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({}) as TemplateType;
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({}) as TemplateType;
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({}) as TemplateType;
Small.args = {
  size: 'small',
  label: 'Button',
};
