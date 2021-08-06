import React from 'react'
import '../css/fetchTemplate.css'

const fetchTemplate = ({name, children}) => {
  return (
    <main className="fetch-template">
      <div className="title">
        {name}
      </div>
        {children}
    </main>
  );
};
export default fetchTemplate;