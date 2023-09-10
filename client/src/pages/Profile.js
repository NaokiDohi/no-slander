import { Link } from 'react-router-dom'
import { Matic } from '@web3uikit/icons'
import TweetInFeed from '../components/TweetInFeed'
import './Profile.css'
import { defaultImgs } from '../defaultImgs'

const Profile = () => {
  return (
    <>
      <img className='profileBanner' src={defaultImgs[1]} />
      <div className='pfpContainer'>
        <img className='profilePFP' src={defaultImgs[0]} />
        <div className='profileName'>Naoki</div>
        <div className='profileWallet'>0x3172368721637826378163854123</div>
        <Link to='/settings'>
          <div className='profileEdit'>Edit Profile</div>
        </Link>
        <div className='profileBio'>Full stack engineer</div>
        <div className='profileTabs'>
          <div className='profileTab'>Your Tweets</div>
        </div>
      </div>
      <TweetInFeed profile={true}></TweetInFeed>
    </>
  )
}

export default Profile
