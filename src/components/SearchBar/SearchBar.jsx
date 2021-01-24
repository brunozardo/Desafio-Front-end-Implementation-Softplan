import React, { useState } from 'react'
import './SearchBar.css'
import { ReactComponent as Magnifier } from './magnifier.svg'

/**
 * @param { object } props
 * @param { string } props.placeholder
 * @param { string } [props.defaultValue]
 * @param { function (string) : void } props.onSearch
 */
export const SearchBar = ({ placeholder, onSearch, defaultValue = '' }) => {
  const [term, setTerm] = useState(defaultValue)

  return (
    <div className='search-bar'>
      <input
        className='search-input'
        placeholder={placeholder}
        type='text'
        value={term}
        onChange={ev => setTerm(ev.target.value)}
        onKeyPress={ev => {
          if (ev.key === 'Enter') {
            onSearch(term)
          }
        }}
      />
      <div className='search-icon'>
        <Magnifier
          onClick={() => {
            onSearch(term)
          }}
        />
      </div>
    </div>
  )
}
