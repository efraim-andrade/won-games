import { Meta, Story } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'ReadDead is back!',
    subtitle: 'Come see Johns new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    backgroundImage: '/img/red-dead-img.jpg'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
