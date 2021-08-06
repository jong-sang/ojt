import React from 'react'
import '../css/refreshButton.css'
import { Link } from 'react-router-dom'

const mainPageButton = ({ onClick }) => {
  return (
    <section className="refreshButtonSection">
        <div className='refreshButton' >
          <button onClick={onClick}>Refresh</button>
        </div>
        <div className='searchButton' >
        <Link to ="./search">
          <button>SearchPage</button>
        </Link>
      </div>
    </section>
 
  );
}

export default mainPageButton;