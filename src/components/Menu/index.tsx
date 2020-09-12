import React, { useState } from 'react'
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'

import { Logo, MediaMatch } from '~/components'
import Button from '~/components/Button'

import * as S from './styles'

type Menu = {
  username?: string
}

const Menu = ({ username }: Menu) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <MediaMatch lessThan="medium">
        <S.Icon>
          <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
        </S.Icon>
      </MediaMatch>

      <S.Logo>
        <Logo hideOnMobile />
      </S.Logo>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.Icon>
          <SearchIcon aria-label="Search" />
        </S.Icon>

        <S.Icon>
          <ShoppingCartIcon aria-label="Open Shopping cart" />
        </S.Icon>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>

            <span>or</span>

            <S.CreateAccount href="#" title="Sign Up">
              Sign up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.FullMenu>
    </S.Container>
  )
}

export default Menu
