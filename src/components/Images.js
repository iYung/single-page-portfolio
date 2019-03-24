import React from 'react';
import { ResponsiveContext, Carousel, Box, Image} from 'grommet';

const Images = (props) => (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box 
          flex 
          background="brand"
          overflow='hidden'
          align='center' 
          justify='center'
          height={size === "small" ? "medium" : "large" }
          margin={{left: "large", right: "large"}}
        >
          <Carousel fill>
            <Image
              fit="cover"
              alignSelf="center"
              src={require("../2.png")}
            />
            <Image
              fit="cover"
              alignSelf="center"
              src={require("../31.png")}
            />
            <Image
              fit="cover"
              alignSelf="center"
              src={require("../9.png")}
            />
            <Image
              fit="cover"
              alignSelf="center"
              src={require("../1.png")}
            />
            <Image
              fit="cover"
              alignSelf="center"
              src={require("../7.png")}
            />
          </Carousel>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );

export default Images;