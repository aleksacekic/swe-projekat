import React from 'react'

function Footer() {
  return (
    <div>
      <div className="tags-sec full-width">
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Community Guidelines</a></li>
          <li><a href="#">Cookies Policy</a></li>
          <li><a href="#">Language</a></li>
          <li><a href="#">Copyright Policy</a></li>
        </ul>
        <div className="cp-sec">
          <img src="images/logo2.png" />
          <p><img src="images/cp.png" />Copyright 2023</p>
        </div>
      </div>{/*tags-sec end*/}
    </div>
  )
}

export default Footer