import React from 'react';
import Routes from './Routes';
import Navigationbar from './components/Navigationbar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigationbar/>
        <Routes />
      </div>
    );
  }
}
