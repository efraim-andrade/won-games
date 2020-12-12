import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  width: 100%;
  height: 14rem;

  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  animation: placeholderShimmer 1s linear infinite forwards;
  background-size: 80rem 14rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;

    height: 100%;
    margin: ${theme.spacings.small};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    top: -0.5rem;

    cursor: pointer;
    color: ${theme.colors.primary};

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    display: flex;
    justify-content: flex-end;
    align-items: center;
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.secondary};
  `,
  promotional: (theme: DefaultTheme) => css`
    margin-right: ${theme.spacings.xsmall};

    color: ${theme.colors.gray};
    text-decoration: line-through;
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    height: 3rem;
    margin-right: calc(${theme.spacings.xxsmall} / 2);

    display: inline-flex;
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
