import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import  Form  from  './Form';



class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign In</h1>
          <Form />

        </div>
      </React.Fragment>
      
    );
  }
}

export default App;
