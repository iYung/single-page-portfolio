import React from 'react';
import { Box } from 'grommet';

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      margin={{left: "large", right: "large", top: "small", bottom: "small"}}
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='none'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  export default AppBar;