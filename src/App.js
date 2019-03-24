import React, { Component } from 'react';
import { Box, Button, Grommet } from 'grommet';
import { LinkedinOption, Github, DocumentText, StatusInfoSmall as Caret } from 'grommet-icons';

import AppBar from './components/AppBar';
import Content from './components/Content';

const theme = {
  global: {
    colors: {
      icon: "#000",
      brand: '#FFF',
      text: '#000',
      control: "#000"
    },
    focus: {
      border: {
        color: "rgba(0, 0, 0, 0)"
      }
    },
    font: {
      family: 'Roboto',
    },
  },
  carousel : { 
    icons : {
      color: "#FFF",
      current: Caret,
      next: "div",
      previous: "div"
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>

        <Box align="center" margin={{left: "large", right: "large"}}>
          <Content />
        </Box>
        <Box align="center">
        <AppBar>
          <Box direction="row">
            <a href="https://github.com/iyung">
              <Button icon={<Github color="text"/>} onClick={() => {}} />
            </a>
            <a href="https://linkedin.com/in/ivankhyung">
              <Button icon={<LinkedinOption color="text"/>} onClick={() => {}} />
            </a>
            <a href="https://drive.google.com/file/d/1HKJzftapoZwo6DOjbwr8fht2GMiEKIyr/view">
              <Button icon={<DocumentText color="text"/>} onClick={() => {}} />
            </a>
          </Box>
        </AppBar>
        </Box>
      </Grommet>
    );
  }
}

export default App;
