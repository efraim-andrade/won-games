import { render } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the Heading', () => {
    const { container } = render(<Heading />)

    expect(container).toMatchSnapshot()
  })
})
