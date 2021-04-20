import React from 'react'

import { ImgWrapper, Img, Button } from './styles'
import initialState from '../../initialState'

import { FaRegHeart } from 'react-icons/fa'

const image = initialState.photos[0].src

export const PhotoCard = ({ id, likes = 0, src = image }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt='Imagen Post' />
        </ImgWrapper>
      </a>
      <Button>
        <FaRegHeart size='32px' />
        {likes} likes!
      </Button>
    </article>
  )
}
