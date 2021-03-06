import React from 'react'
import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite
} from '@styled-icons/material-outlined'

import Button from '~/components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from '~/components/Ribbon'

import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProps) => {
  return (
    <S.Container>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>

          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}

          <S.Price>{promotionalPrice || price}</S.Price>

          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Container>
  )
}

export default GameCard
