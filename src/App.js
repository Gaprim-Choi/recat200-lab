import React from 'react'

import MyComponent from './005/App';

class App extends React.Component{
  render(){
    return(
      <div className = 'body'>
        <div><MyComponent /></div>
      </div>
    );
  }
}

export default App;