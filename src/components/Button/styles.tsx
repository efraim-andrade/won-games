import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '~/components/Button'

type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const modifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;

    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    font-size: ${theme.font.sizes.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  hasIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && modifiers[size](theme)}
    ${!!fullWidth && modifiers.fullWidth}
    ${!!hasIcon && modifiers.hasIcon(theme)}
  `}
`
