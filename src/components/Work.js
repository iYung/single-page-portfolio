import React from 'react';
import { Box, Text } from 'grommet';

const Work = (props) => (
    <Box width="large">
      <Box margin={{bottom: "medium"}}>
        <Text weight="bold" margin={{right: "xsmall"}}>software engineer @ square</Text>
        <Text weight="bold">starting july 2019</Text>
        <Text>working on cash app</Text>
      </Box>
      <Box margin={{bottom: "medium"}}>
        <Text weight="bold" margin={{right: "xsmall"}}>developer co-op @ td innovation lab</Text>
        <Text weight="bold">may 2018 to aug 2018</Text>
        <Text>mobile app development for android & ios</Text>
        <Text>used kotlin, java, swift, & react native</Text>
      </Box>
      <Box margin={{bottom: "medium"}}>
        <Text weight="bold" margin={{right: "xsmall"}}>it application intern @ celestica</Text>
        <Text weight="bold">may 2017 to apr 2018</Text>
        <Text>app development with python & javascript</Text>
        <Text>sql query creation</Text>
      </Box>
    </Box>
)

export default Work;