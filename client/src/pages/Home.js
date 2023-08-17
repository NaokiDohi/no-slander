import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@web3uikit/core'
import { Image } from '@web3uikit/icons'
import { defaultImgs } from '../defaultImgs'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='mainContent'>
        <div className='profileTweet'>
          <div className='tweetSection'>
            <Avatar isRounded image={userImage} theme='image' size={60} />
            <textarea
              value={tweetText}
              className='textArea'
              placeholder="What's going on ?"
              name='tweetTxtArea'
              onChange={(e) => setTweetText(e.target.value)}
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
            <div className='tweet' onClick={addTweet}>
              {uploading ? <Loading /> : 'Tweet'}
            </div>
          </div>
        </div>
        <TweetInFeed profile={false} reload={uploading} />
      </div>
    </>
  )
}

export default Home
