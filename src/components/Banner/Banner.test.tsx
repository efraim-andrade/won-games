import { screen } from '@testing-library/react'

import { renderWithTheme } from '~/utils/tests/helpers'

import Banner from '.'

const props = {
  title: 'Defy death',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
  subtitle: '<p>Play with new CrashLands season</p>',
  img: 'https://source.unsplash.com/user/willianjusten/1042x580'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Play with new CrashLands season/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
