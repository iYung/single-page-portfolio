import React from 'react';
import { Box, Text } from 'grommet';

const Articles = (props) => (
    <Box width="large">
      <Box margin={{bottom: "medium"}}>
        <a href="https://medium.freecodecamp.org/a-beginners-guide-to-training-and-deploying-machine-learning-models-using-python-48a313502e5a">
          <Text weight="bold">a beginner's guide to training and deploying machine learning models using python</Text>
        </a>
        <Text margin={{right: "xsmall"}}>jun 2018 on freecodecamp</Text>
      </Box>
      <Box margin={{bottom: "medium"}}>
        <a href="https://medium.com/td-lab/an-introductory-guide-to-android-jetpack-slices-9f49a001be3b">
          <Text weight="bold">an introductory guide to android jetpack slices</Text>
        </a>
        <Text margin={{right: "xsmall"}}>may 2018 on td lab</Text>
      </Box>
    </Box>
)

export default Articles;