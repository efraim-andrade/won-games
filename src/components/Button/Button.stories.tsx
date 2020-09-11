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
