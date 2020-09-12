import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;

    width: 100%;
    padding: ${theme.spacings.small} 0;

    display: flex;
    align-items: center;
  `}
`

export const Logo = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    cursor: pointer;
    color: ${theme.colors.white};
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div + div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    margin: 0.3rem ${theme.spacings.small} 0;

    text-align: center;
    text-decoration: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};

    &:hover {
      &::after {
        position: absolute;

        height: 0.3rem;

        display: block;

        content: '';
        animation: hoverAnimation 0.2s forwards;
        background-color: ${theme.colors.primary};
      }

      @keyframes hoverAnimation {
        from {
          left: 50%;

          width: 0;
        }

        to {
          left: 0;

          width: 100%;
        }
      }
    }
  `}
`

type FullMenuProps = {
  isOpen: boolean
}

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};

    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;

      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};

      cursor: pointer;
    }

    ${MenuNav} {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    ${MenuLink} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};

      margin-bottom: ${theme.spacings.small};

      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};

      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    display: flex;
    align-items: center;
    flex-direction: column;

    > span {
      margin: ${theme.spacings.xxsmall} 0;

      display: block;

      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.colors.primary};

    text-decoration: none;
    color: ${theme.colors.primary};
  `}
`
