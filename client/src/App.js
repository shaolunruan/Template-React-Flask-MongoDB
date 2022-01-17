import React, {Component} from 'react'


import './App.css'

import DOM from './Components/DOM.jsx'


class App extends Component {

  render(){
    return(
        <div className="root">
            <DOM/>
        </div>
    )
  }
}

export default App;