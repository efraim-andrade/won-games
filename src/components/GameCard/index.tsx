import React from 'react'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from '~/components/Button'

import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ developer, img, price, title }: GameCardProps) => {
  return (
    <S.Container>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Info>
        <S.Title>{title}</S.Title>

        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist" />
      </S.FavButton>

      <S.BuyBox>
        <S.Price>{price}</S.Price>

        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Container>
  )
}

export default GameCard
