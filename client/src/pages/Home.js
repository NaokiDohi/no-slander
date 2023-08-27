import React, { useState, useRef } from 'react'
import { Avatar } from '@web3uikit/core'
import { Image } from '@web3uikit/icons'
import { defaultImgs } from '../defaultImgs'
import './Home.css'

const Home = () => {
  const inputFile = useRef(null)
  const [selectedImage, setSelectedImage] = useState()
  const [tweetText, setTweetText] = useState('')

  const onImageClick = () => {
    inputFile.current.click()
  }

  const changeHandler = (event) => {
    const imgFile = event.target.files[0]
    setSelectedImage(URL.createObjectURL(imgFile))
  }
  return (
    <>
      <div className='mainContent'>
        <div className='profileTweet'>
          <div className='tweetSection'>
            <Avatar isRounded image={defaultImgs[0]} theme='image' size={60} />
            <textarea
              className='textArea'
              placeholder="What's going on ?"
              name='tweetTxtArea'
              onChange={(e) => {
                setTweetText(e.target.value)
              }}
            ></textarea>
          </div>
          <div className='tweetSection'>
            <div className='imgDiv' onClick={onImageClick}>
              <input
                type='file'
                ref={inputFile}
                onChange={changeHandler}
                style={{ display: 'none' }}
              />
              {selectedImage ? (
                <img src={selectedImage} width={150} />
              ) : (
                <Image fontSize={25} fill='#ffffff' />
              )}
            </div>
            <div className='tweet'>Tweet</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
