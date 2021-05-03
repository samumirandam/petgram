import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SIGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <p>Cargando...</p>
  if (error) return <p>`Ha ocurrido una falla ${error}`</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SIGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
