import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main'
import SearchPage from './SearchPage'

class App extends Component {
  handleRefresh = (e) =>{
    window.location.reload();
    console.log(123);
  }
  
  render( ) {  
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/search" exact component={SearchPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
