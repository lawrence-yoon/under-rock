import React from 'react'

function Navbar() {
    //this should have three links. one to the top, one to start of ap, one to start of yc
  return (
    <navbar>
        <div className="navbar">
            <div className='home-button'>            
                <a href="#push-content-down">Under Rock</a>
            </div>
            <div className="right-links">              
                <a href="#ap">AP News</a>
                <a href="#yc">YC News</a>
            </div>
        </div>
    </navbar>
  )
}

export default Navbar