import { Meta, Story } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'ReadDead its back',
    subtitle: 'Come see Johns new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
