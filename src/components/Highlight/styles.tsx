import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from '~/components/Highlight'

type ContainerProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const modifiers = {
  right: () => css`
    grid-template-areas: 'floatImage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatImage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `
}

export const Container = styled.section<ContainerProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;

    height: 23rem;

    display: grid;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      position: absolute;

      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.6);
      content: '';
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${modifiers[alignment!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};

    max-width: 100%;
    max-height: 23rem;

    grid-area: floatImage;
    align-self: end;

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};

    padding: ${theme.spacings.xsmall};

    grid-area: content;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large}
    `}
  `}
`
