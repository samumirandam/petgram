import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const Datail = (props) => {
  const {
    match: {
      params: { id }
    }
  } = props
  return (
    <PhotoCardWithQuery id={id} />

  )
}
