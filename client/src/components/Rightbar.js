import React from 'react'
import hardhat from '../images/hardhat.png'
import solidity from '../images/solidity.png'
import react from '../images/react.png'
import metamask from '../images/metamask.jpg'
import { Input } from '@web3uikit/core'
import { Search } from '@web3uikit/icons'
import './Rightbar.css'

const Rightbar = () => {
  const trends = [
    {
      img: hardhat,
      text: 'Learn how to use hardhat dev tool',
      link: '#',
    },
    {
      img: solidity,
      text: 'Master smart contract deveopment',
      link: '#',
    },

    {
      img: react,
      text: 'Master React v 18',
      link: '#',
    },
    {
      img: metamask,
      text: 'Welcome to web3',
      link: '#',
    },
  ]
  return (
    <div className='rightbarContent'>
      <Input
        label='Search Twitter'
        name='Search Twitter'
        prefixIcon={<Search />}
        labelBgColor='#141d26'
      ></Input>
      <div className='trends'>
        Trending
        {trends.map((e) => {
          return (
            <>
              <div className='trend' onClick={() => window.open(e.link)}>
                <img src={e.img} className='trendImg' alt={e.text}></img>
                <div className='trendText'>{e.text}</div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Rightbar
