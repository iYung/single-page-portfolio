import React, { Component } from 'react';
import { Box, Button, Heading, Grommet, Accordion, AccordionPanel } from 'grommet';
import { LinkedinOption, Github, DocumentText, StatusInfoSmall as Caret } from 'grommet-icons';

import Images from './components/Images';
import AppBar from './components/AppBar';
import Work from './components/Work';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Articles from './components/Articles';

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
        <AppBar>
          <Heading level='3' color='text' margin='none'>ivan yung</Heading>
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
        <Images />
        <Box
          margin={{left: "large", right: "large", top: "large", bottom: "medium"}}
          align="center"
        >
          <Accordion>
            <AccordionPanel label="work">
              <Box pad="medium" background="brand">
                <Work />
              </Box>
            </AccordionPanel>
            <AccordionPanel label="projects">
              <Box pad="medium" background="brand">
                <Projects />
              </Box>
            </AccordionPanel>
            <AccordionPanel label="articles">
              <Box pad="medium" background="brand">
                <Articles />
              </Box>
            </AccordionPanel>
            <AccordionPanel label="awards">
              <Box pad="medium" background="brand">
                <Awards />
              </Box>
            </AccordionPanel>
          </Accordion>
        </Box>
      </Grommet>
    );
  }
}

export default App;
