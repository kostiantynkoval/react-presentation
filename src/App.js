import React, { Component } from 'react';
import logo from './logo.svg';

import { ThemeProvider } from 'styled-components'

import AppStyled from './AppStyled';
import LinkStyled from './LinkStyled'
import { Button, ButtonExtended } from './ButtonStyled';

const darkTheme = {
    bgColor: '#0d0c44',
    textColor: 'skyblue',
    linkColor: 'violet'
}

const brightTheme = {
    bgColor: 'pink',
    textColor: 'red',
    linkColor: 'pink'
}

class App extends Component {
    // state = {
    //     isDarkThemeActive: true
    // }
    //
    // toggleTheme = () => this.setState({isDarkThemeActive: !this.state.isDarkThemeActive})

  render() {
    return (

      <AppStyled>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Styled Components</h1>
        </header>

          {/*<Button onClick={this.toggleTheme} top>Change Theme</Button>*/}

      {/*<div>*/}
          {/*<Button primary >I'm styled Button 1</Button>*/}
          {/*<Button>I'm styled Button 2</Button>*/}
      {/*</div>*/}

      <br/>

      <div>
          <LinkStyled/>
      </div>



      </AppStyled>
    );
  }
}

// <ThemeProvider theme={this.state.isDarkThemeActive ? darkTheme : brightTheme}>
// </ThemeProvider>

export default App;
