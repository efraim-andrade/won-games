import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonColors, RibbonProps } from '.'

const modifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    right: -2rem;

    height: 3.6rem;
    padding: 0 ${theme.spacings.small};

    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    right: -1.5rem;

    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};

    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;

    color: ${theme.colors.white};
    font-size: ${theme.font.bold};

    &::before {
      position: absolute;
      right: 0;

      border-style: solid;

      content: '';

      border-left-width: 0rem;
      border-bottom-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    ${!!size && modifiers[size](theme)}
    ${!!color && modifiers.color(theme, color)}
  `}
`
