import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '~/components/Button'

type ContainerProps = Pick<ButtonProps, 'size'>

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
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);

    ${!!size && modifiers[size](theme)}
  `}
`
