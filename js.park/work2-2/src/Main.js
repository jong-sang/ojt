import FetchTemplate from './components/fetchTemplate';
import MainPageButton from './components/mainPageButton';
import FetchApi from './components/fetchApi';
import React, { Component } from 'react';
import FetchBody from './components/fetchBody';

class Main extends Component {
  handleRefresh = (e) =>{
    window.location.reload();
    console.log(123);
  }
  
  render( ) {  
    return (
      <FetchTemplate name='Fetch List'>
        <FetchBody>
          <MainPageButton onClick={this.handleRefresh}/>
          <FetchApi />
        </FetchBody>
      </FetchTemplate>
    );
  }
}

export default Main;