import React from 'react';
import { Box, Text, Menu } from 'grommet';

class Projects extends React.Component {

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
              <Text weight="bold">medication dedication</Text>
              <Text weight="bold">feb 2019</Text>
              <Text>iot pill monitoring solution</Text>
              <Text>front-end built with flutter</Text>
              <Text>back-end built with nodejs & azure sql database</Text>
              <Text>hardware built with arduino & particle photon</Text>
              <Box direction="row">
                <a href="https://devpost.com/software/medication-dedication">
                  <Text  margin={{right: "small"}}>devpost</Text>
                </a>
                <a href="https://github.com/iYung/med-ded-client-app">
                  <Text >github</Text>
                </a>
              </Box>
            </Box>
          }
          {
            this.state.year === "2018" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">depository repository</Text>
                <Text weight="bold">nov 2018</Text>
                <Text>airbnb style app for storage space</Text>
                <Text>front-end built with react native</Text>
                <Text>back-end built with python, stdlib & algolia</Text>
                <Text>hardware built with dragonboard 410c</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/depository-repository">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                  <a href="https://github.com/pwnedpixel/repository-depository">
                    <Text >github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">pawsitivity</Text>
                <Text weight="bold">oct 2018</Text>
                <Text>chrome extension which prevents negative comments</Text>
                <Text>extension built with javascript</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/bark-and-byte">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                  <a href="https://github.com/iYung/mhacks11">
                    <Text >github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">genome meetup</Text>
                <Text weight="bold">jul 2018</Text>
                <Text>ios app to organize meetups with genome data</Text>
                <Text>app built with swift</Text>
                <Text>back-end made with python & firebase</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/genome-meetup">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">leach</Text>
                <Text weight="bold">jul 2018</Text>
                <Text>web application for skill sharing</Text>
                <Text>front-end made with react & nodejs</Text>
                <Text>back-end made with nodejs & mongodb</Text>
                <Box direction="row">
                  <a href="https://devcircles2018.herokuapp.com/">
                    <Text  margin={{right: "small"}}>website</Text>
                  </a>
                  <a href="https://github.com/iYung/fb-community-challenge-2018">
                    <Text >github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">tap atm</Text>
                <Text weight="bold">may 2018</Text>
                <Text>payment experiment using nfc with atms</Text>
                <Text>android apps made with kotlin</Text>
                <Text>backend made with flask & python</Text>
                <Text>hardware made with a raspberry pi & servos</Text>
                <Box direction="row">
                  <a href="https://ruhacks2018.hackerearth.com/sprints/ru-hacks-2018/dashboard/a59a196/submission/">
                    <Text  margin={{right: "small"}}>hackerearth</Text>
                  </a>
                  <a href="https://github.com/pwnedpixel/TapATM">
                    <Text >github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">positivity game</Text>
                <Text weight="bold">apr 2018</Text>
                <Text>firefox add-on which promoted internet positivity</Text>
                <Text>add-on made with javascript</Text>
                <Text>back-end made with AWS, nodejs & redis</Text>
                <Box direction="row">
                  <a href="https://github.com/iYung/positivityGame">
                    <Text >github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">longstrip for mangadex</Text>
                <Text weight="bold">jan 2018</Text>
                <Text>chrome extension which added a long strip reading mode</Text>
                <Text>hit 1400+ downloads & 1000+ daily users</Text>
                <Text>add-on made with coffeescript & jquery</Text>
                <Box direction="row">
                  <a href="https://github.com/iYung/mangaDexAllPagesExtension">
                    <Text >github</Text>
                  </a>
                </Box>
              </Box>
            </Box>
          }
          {
            this.state.year === "2017" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">shelfie</Text>
                <Text weight="bold">nov 2017</Text>
                <Text>shelf robot capable of fetching items</Text>
                <Text>desktop app built with windows forms, python & c#</Text>
                <Text>hardware built with a spark photon & motors</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/shelfie-njv01d">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">portfolio</Text>
                <Text weight="bold">nov 2017</Text>
                <Text>wordpress-like web application</Text>
                <Text>front-end built with react & nodejs</Text>
                <Text>back-end made with express & nodejs</Text>
                <Text>deployed on heroku</Text>
                <Box direction="row">
                  <a href="https://github.com/iYung/portfolio1.5">
                    <Text  margin={{right: "small"}}>github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">grow with the flow</Text>
                <Text weight="bold">nov 2017</Text>
                <Text>iot plant watering solution</Text>
                <Text>front-end built with react & nodejs</Text>
                <Text>back-end made with express & nodejs</Text>
                <Text>hardware made with a raspberry pi & solenoids</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/grow-with-the-flow">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                  <a href="https://github.com/iYung/plantWatering">
                    <Text  margin={{right: "small"}}>github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">gall-ar-y</Text>
                <Text weight="bold">sept 2017</Text>
                <Text>augmented reality app to demo paintings</Text>
                <Text>front-end built with react & nodejs</Text>
                <Text>back-end made with express, aws & nodejs</Text>
                <Text>phone app made with c#, unity & vuforia</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/gall-ar-y">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">atlas reactor replays</Text>
                <Text weight="bold">sept 2017</Text>
                <Text>atlas reactor game replay sharing website and desktop client</Text>
                <Text>front-end built with react & nodejs</Text>
                <Text>back-end made with express, aws & nodejs</Text>
                <Text>desktop app made with c# & windows forms</Text>
                <Box direction="row">
                  <a href="https://github.com/iYung/atlasReactorReplays">
                    <Text  margin={{right: "small"}}>github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">green waste bin</Text>
                <Text weight="bold">feb 2017</Text>
                <Text>smart waste bin that can sort</Text>
                <Text>front-end built with jquery & javascript</Text>
                <Text>back-end made with indico</Text>
                <Text>hardware made with a raspberry pi, motors & python</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/green-waste-bin">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                  <a href="https://github.com/pwnedpixel/GreenGarbage">
                    <Text  margin={{right: "small"}}>github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">theia</Text>
                <Text weight="bold">jan 2017</Text>
                <Text>smart waste bin that can sort</Text>
                <Text>front-end built with azure & js</Text>
                <Text>back-end made with azure & c#</Text>
                <Text>hardware made with a raspberry pi & python</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/theia-o02nk8">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                  <a href="https://github.com/pwnedpixel/RecogToSpeech">
                    <Text  margin={{right: "small"}}>github</Text>
                  </a>
                </Box>
              </Box>
            </Box>
          }
          {
            this.state.year === "2016" &&
            <Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">braille printer</Text>
                <Text weight="bold">oct 2016</Text>
                <Text>low cost braille printer</Text>
                <Text>hardware built with a raspberry pi, python & solenoids</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/braille-printer">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                  <a href="https://github.com/pwnedpixel/BraillePrinter">
                    <Text  margin={{right: "small"}}>github</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">ar watch</Text>
                <Text weight="bold">mar 2016</Text>
                <Text>google cardboard augmented reality watch</Text>
                <Text>phone app made with unity, c# & vuforia</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/ar-watch">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                </Box>
              </Box>
              <Box margin={{bottom: "medium"}}>
                <Text weight="bold">shake and quake</Text>
                <Text weight="bold">mar 2016</Text>
                <Text>earthquake data visualization with hardware</Text>
                <Text>hardware made with a spark photon & leds</Text>
                <Box direction="row">
                  <a href="https://devpost.com/software/shake-and-quake-7we4zv">
                    <Text  margin={{right: "small"}}>devpost</Text>
                  </a>
                </Box>
              </Box>
            </Box>
          }
          {
            this.state.year === "2015" &&
            <Box margin={{bottom: "medium"}}>
              <Text weight="bold">just out for a rift</Text>
              <Text weight="bold">nov 2015</Text>
              <Text>vr biking experience</Text>
              <Text>vr app built with unity & c#</Text>
              <Text>hardware built with an arduino, oculus rift & exercise bike</Text>
              <Box direction="row">
                <a href="https://devpost.com/software/just-out-for-a-rift">
                  <Text  margin={{right: "small"}}>devpost</Text>
                </a>
              </Box>
            </Box>
          }
        </Box>
      )
    }
    
}

export default Projects;