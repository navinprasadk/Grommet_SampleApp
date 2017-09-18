import React, {Component} from 'react';
import './App.css';
import {default as GrommetApp} from 'grommet/components/App'
import LoginForm from 'grommet/components/LoginForm';

class App extends Component {
  handleSubmit(event) {
    alert('Welcome');
  }

  render() {
    return (
      <GrommetApp>
        <LoginForm onSubmit={this.handleSubmit} style={{
          marginLeft: '400px'
        }} rememberMe={true} secondaryText='Enter your credentials' title='LOGIN'/>
      </GrommetApp>
    );
  }
}
export default App;
