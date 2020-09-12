import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '~/utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenu = screen.getByRole('navigation', { hidden: true })
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenu).toHaveStyle({ opacity: 1 })
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenu).toHaveStyle({ opacity: 0 })
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/log in now/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).toBeInTheDocument()

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Efraim" />)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()

    expect(screen.queryByText(/my account/i)).toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).toBeInTheDocument()
  })
})
