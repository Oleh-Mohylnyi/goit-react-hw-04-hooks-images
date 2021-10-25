import './App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loader from "react-loader-spinner";
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Modal from '../components/Modal';
import logo from '.././images/pixabay.svg'
import Reject from '../components/Reject';


function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [status, setStatus] = useState('idle')
  // idle, pending, resolved, rejected
  // const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState(null)

  const handleSerchQuery = inputText => {
    setSearchQuery(inputText)
    setPage(1)
    setImages([])
  }

  const clickLoadMore = () => {
    setPage(preState => preState + 1)
  }

  const toggleModal = () => {
    setShowModal(preState => !preState)
  }

  const openModal = largeImageURL => {
    toggleModal()
    setLargeImageURL(largeImageURL)
  }
  
  const fetchImages = () => {
    const key = '23100345-a1985f2d3b70e4240f74cca05'
    const imageType = 'photo'
    const orientationImg = 'horizontal'
    const perPage = 12
    
    return fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=${imageType}&orientation=${orientationImg}&per_page=${perPage}`)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(
          toast(`nothing found for this request: ${searchQuery}`)
          // setError(response)
          )
        }
          return response.json()
      })
  }

  
  const writeDownData = function (newImages) {
    
    const checkArray = function (newImages, oldImages=[]) {
        return newImages.reduce((acc, image) => {
            if (!acc.some((image, acc) => acc.id === image.id)) {
                return [...acc, image]
            } else {return acc}
        }, oldImages)
    }

    if (images.length === 0) {
      setImages(checkArray(newImages.hits))
    } else {
      const imagesForPush = checkArray(newImages.hits)
      setImages(preState => [...preState, ...imagesForPush])
      }
  }
  
  useEffect(() => {
    if (searchQuery === '') { return }
    setStatus('pending')

    fetchImages()
      .then(responseImages => {
        if (responseImages.hits.length === 0) {
          setStatus('rejected')
          return
        }
        writeDownData(responseImages)
        setStatus('resolved')
      })
      .catch(() => { setStatus('rejected') })
    // eslint-disable-next-line
  }, [searchQuery])


  useEffect(() => {
    if (page === 1) { return }
    
    fetchImages()
      .then(responseImages => {
        if (responseImages.hits.length === 0) {
          setStatus('rejected')
          toast(`no more images found for the search query "${searchQuery}""`)
          return
        }
        writeDownData(responseImages)
        setStatus('resolved')
      })
      .catch(error => { setStatus('rejected') })
    // eslint-disable-next-line
    }, [page])
    
  useEffect(() => {
    if (page !== 1) {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
      })
    }
    // eslint-disable-next-line
    }, [images])
 
  const checkNeedLoadMore = () => {
    if (images !== []
      && images.length !== 0
      && images.length % 12 === 0) {
        return true    
      }
  }

  return (
    <div className="App">

      <Searchbar onSubmit={handleSerchQuery} />

      {(status === 'idle') && 
        <img src={logo} alt="" className="Logo-image" />}
        
      {(status === 'pending') &&
        <div className="Div-loader">
          <Loader type="ThreeDots" color="blue" />
        </div>}
      
      {(status === 'resolved') &&
        <ImageGallery
          images={images}
          openModal={openModal}
        />}
        
      {(status === 'rejected') &&
        <Reject searchQuery={searchQuery}/>}
      
      {checkNeedLoadMore() &&
        < Button clickBtn={clickLoadMore} />}
      
      {showModal && <Modal
        closeModal={toggleModal}
        largeImageURL={largeImageURL} />}
      
      <ToastContainer autoClose={2000} />
      
    </div>
  )
}

export default App;
