import './imageGalleryItem.css'
import PropTypes from 'prop-types'

export default function ImageGalleryItem({ image, openModal }) {
    
    const { webformatURL, largeImageURL } = image
    
    return (
        <li
            className="ImageGalleryItem"
            onClick={() => openModal(largeImageURL)}>
                
            <img
                src={webformatURL}
                alt=""
                className="ImageGalleryItem-image"
            />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    openModal: PropTypes.func,
    image: PropTypes.shape({
        largeImageURL: PropTypes.string,
        webformatURL: PropTypes.string,
    })
}