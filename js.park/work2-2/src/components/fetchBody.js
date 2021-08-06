import React from 'react'

const fetchBody = ({children}) => {
  return (
    <div className="data">
      <section className="dataTableSection">
        {children}
      </section>
    </div>
  );
}

export default fetchBody;