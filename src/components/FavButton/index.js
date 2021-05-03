import React from 'react'
import { Button } from './styles'

import { FaRegHeart, FaHeart } from 'react-icons/fa'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? FaHeart : FaRegHeart

  return (
    <Button onClick={onClick}>
      <Icon size='32px' />
      {likes} likes!
    </Button>
  )
}
