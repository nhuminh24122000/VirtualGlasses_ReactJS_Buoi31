import React, { Component } from 'react'
import TryGlasses from './TryGlasses'

export default class VirtualGlasses extends Component {
  render() {
    return (
      <div className='VRglasses'>
        <div className='bg'>
          <h2 className='title text-white text-center py-5'>TRY GLASSES APP ONLINE</h2>
          <div className="row container-fluid">
            <TryGlasses />
          </div>
        </div>
      </div>
    )
  }
}
