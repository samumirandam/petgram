import React from 'react'
import { Link } from 'react-router-dom'

import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import initialState from '../../initialState'

const image = initialState.photos[0].src

export const PhotoCard = ({ id, likes = 0, src = image }) => {
  const [show, element] = useNearScreen()

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='Imagen Post' />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const hadleFavClick = () => {
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                setLiked(!liked)
              }
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={hadleFavClick}
                />
              )
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}
