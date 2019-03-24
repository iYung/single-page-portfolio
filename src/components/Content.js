import React from 'react';
import { Box, Accordion, AccordionPanel, Image, ResponsiveContext } from 'grommet';

import Work from './Work';
import Awards from './Awards';
import Projects from './Projects';
import Articles from './Articles';

class Content extends React.Component {

    constructor(props){
        super(props);
        this.state = { active: 0 };
    }

    render(){
        return (
            <Box
                align="center"
                width="large"
                overflow="hidden"
            >
                <Accordion activeIndex={this.state.active} onActive={(active) => this.setState({ active: active })}>
                    <AccordionPanel label="ivan yung">
                    <ResponsiveContext.Consumer>
                        {(size) => (
                            <Box height={size === "small" ? "medium" : "medium"}>
                                <Image
                                    fit="cover"
                                    src={require("../53.png")}
                                />
                            </Box>
                        )}
                    </ResponsiveContext.Consumer>
                    </AccordionPanel>
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
        )
    }

}

export default Content;