import React, {useEffect} from "react"
import { createPortal } from 'react-dom'
import './modal.css'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({ largeImageURL, closeModal }) {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)
        return () => {
            window.removeEventListener('keydown', handleKeydown)
        }
    },[])
    
    const handleKeydown = e => {
        console.log("работает листенер")
        if (e.code === 'Escape') {
                closeModal()
            }
    }

    const handleOverlay = event => {
        if (event.currentTarget === event.target) {
            closeModal()
        }
    }

    return createPortal(
        <div className="Overlay"
            onClick={handleOverlay}>
          <div className="Modal">
            <img src={largeImageURL} alt="" />
          </div>
        </div>,
        modalRoot
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func,
    largeImageURL: PropTypes.string,
}