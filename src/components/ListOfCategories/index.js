import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import initialState from '../../initialState.js'

const useCategoriesData = () => {
  const [categories, setCategories] = useState(initialState.categories)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-server-samumirandam.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)

  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 190
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? (
          <Item key='loading'>
            <Category />
          </Item>
          )
        : (
            categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))
          )}
    </List>
  )

  // if (loading) {
  //   return 'Cargando...'
  // }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
