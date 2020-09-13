import { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  },
  parameters: {
    layout: 'centered'
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />

Basic.args = { children: 'Buy Now' }

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy Now',
  icon: <AddShoppingCart />,
  size: 'small'
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Buy Now',
  size: 'small',
  as: 'a',
  href: '/link'
}
