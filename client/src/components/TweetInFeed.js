import { defaultImgs } from '../defaultImgs'
import { Avatar } from '@web3uikit/core'
import { MessageCircle, Star, Matic } from '@web3uikit/icons'
import './TweetInFeed.css'

const TweetInFeed = (props) => {
  return (
    <>
      <div className='feedTweet'>
        <Avatar isRounded image={defaultImgs[0]} theme='image' size={60} />
        <div className='completeTweet'>
          <div className='who'>
            Naoki
            <div className='accWhen'>0x4446622323223232344</div>
          </div>
          <div className='tweetContent'>
            Hello web3
            <img src={defaultImgs[1]} className='tweetImg' />
          </div>
          <div className='interactions'>
            <div className='interactionNums'>
              <MessageCircle fontSize={20} />
            </div>
            <div className='interactionNums'>
              <Star fontSize={20} />
            </div>
            <div className='interactionNums'>
              <Matic fontSize={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TweetInFeed
