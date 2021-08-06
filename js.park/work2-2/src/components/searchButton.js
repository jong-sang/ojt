import React from 'react'
import { Link } from 'react-router-dom'

const searchButton = ({ onClick }) => {
  return (
    <section className="searchButtonSection">
        <div className='searchButton' >
          <Link to ="./search">
            <button onClick={onClick}>searchButton</button>
          </Link>
        </div>
    </section>
  );
}

export default searchButton;