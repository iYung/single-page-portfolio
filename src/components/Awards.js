import React from 'react';
import { Box, Text, Menu } from 'grommet';

class Awards extends React.Component {

    constructor(props){
      super(props);
      this.state = { year: "2019" };
    }
  
    render(){
      return (
        <Box width="large">
          <Menu
            label={this.state.year}
            items={[
              { label: '2019', onClick: () => { this.setState({ year: "2019" })} },
              { label: '2018', onClick: () => { this.setState({ year: "2018" })} },
              { label: '2017', onClick: () => { this.setState({ year: "2017" })} },
              { label: '2016', onClick: () => { this.setState({ year: "2016" })} },
              { label: '2015', onClick: () => { this.setState({ year: "2015" })} },
            ]}
            margin={{bottom: "medium"}}
          />
          {
            this.state.year === "2019" &&
            <Box margin={{bottom: "medium"}}>
              <Text weight="bold" margin={{right: "xsmall"}}>best use of particle iot @ makeuoft</Text>
              <Text>feb 2019</Text>
            </Box>
          }
          {
            this.state.year === "2018" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>best use of algolia @ mhacks 11</Text>
                <Text>oct 2018</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>cibc client experience hack @ ruhacks</Text>
                <Text>may 2018</Text>
              </Box>
            </Box>
          }
          {
            this.state.year === "2017" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>best green hack @ echacks</Text>
                <Text>nov 2017</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>2nd place @ echacks</Text>
                <Text>nov 2017</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>finalist @ hack the north</Text>
                <Text>sept 2017</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>dean's honor list @ western university</Text>
                <Text>apr 2017</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>2nd place @ qhacks</Text>
                <Text>feb 2017</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>best use of indico api @ qhacks</Text>
                <Text>feb 2017</Text>
              </Box>
            </Box>
          }
          {
            this.state.year === "2016" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>1st place @ hackwestern</Text>
                <Text>oct 2016</Text>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>3rd place @ wearhackskw</Text>
                <Text>mar 2016</Text>
              </Box>
            </Box>
          }
          {
            this.state.year === "2015" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold" margin={{right: "xsmall"}}>best hardware hack @ hackwestern</Text>
                <Text>nov 2015</Text>
              </Box>
            </Box>
          }
        </Box>
      )
    }
}

export default Awards;