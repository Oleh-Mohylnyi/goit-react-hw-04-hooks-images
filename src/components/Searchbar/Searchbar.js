import React, { useState } from "react"
// import { ImSearch } from 'react-icons/im'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './searchbar.css'
import PropTypes from 'prop-types'

export default function Searchbar({onSubmit}) {
    const [inputText, setInputText] = useState('')
    const [сurrentSearch, setCurrentSearch] = useState('')

    const handleChange = e => {
        setInputText(e.currentTarget.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (inputText.trim() === "") {
            toast('enter your search term')
            return
        }
        if (inputText.trim().toLowerCase() === сurrentSearch) {
            toast('enter a new search query')
            return
        }
        onSubmit(inputText.toLowerCase())
        setCurrentSearch(inputText.toLowerCase())
    }

    return (
        <header className="Searchbar">
            <form
                onSubmit={handleSubmit}
                className="SearchForm">
                
            <button 
                type="submit" 
                className="SearchForm-button">
                    {/* <ImSearch/>     */}
                    <span className="SearchForm-button-label">
                        Search
                    </span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              name= "inputText"
              value={inputText}
              onChange={handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
                />
                
            </form>
                
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
    }