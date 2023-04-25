import React from 'react'
import "./error.css"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div id='error-page'>
  <div id='error-inner'>
  <div class="pesan-eror">404</div>
  <div className="container">
    <div className="row">
        <div className="col">
    {/* <p class="balik-home">Error 404 Page Not Found</p><br/> */}
    <div class=" col error-message">
            {/* <span class="error-1">O</span><span class="error-2">ops! You're lost</span> */}
            <span class="error-2"><span class="error-1">O</span>ops! You're lost</span>
              <p style={{lineHeight:"35px"}}>Sorry the page you are looking could not be found</p>
              <Link to='/home' className='errorBtn'>Back to Home</Link>
            </div>
        </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Error