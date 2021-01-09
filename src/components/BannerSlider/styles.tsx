import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as BannerStyles from '~/components/Banner/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    .slick-dots {
      margin-top: ${theme.spacings.small};

      display: flex !important;
      justify-content: center;
      align-items: center;

      list-style: none;

      li {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        margin: 0 ${theme.spacings.xxsmall};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        background: ${theme.colors.white};

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        width: 1.2rem;
        height: 1.2rem;

        opacity: 0;
        cursor: pointer;
      }
    }

    ${media.greaterThan('small')`
      ${BannerStyles.Container} {
        margin: 0 auto;
        max-width: 104rem;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        top: 0;

        height: 100%;
        margin: 0;

        flex-direction: column;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`
