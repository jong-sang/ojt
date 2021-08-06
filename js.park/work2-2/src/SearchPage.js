import FetchTemplate from './components/fetchTemplate';
import React, { Component } from 'react';
import SearchBox from './components/SearchBox'

class SearchPage extends Component {
  
  render( ) {  
    return (
      <FetchTemplate name='Search List'>
        <SearchBox />
      </FetchTemplate>
    );
  }
}

export default SearchPage;