import React, { Component } from 'react';
import { Carousel, Box, Button, Heading, Grommet, Image, Grid, Text, Accordion, AccordionPanel, Markdown } from 'grommet';
import { LinkedinOption, Github, MailOption, DocumentText } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#FFF',
      text: '#000'
    },
    font: {
      family: 'Roboto',
      size: '12px',
      height: '15px',
    },
  },
};

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

const Images = (props) => (
  <Box 
    flex 
    background="brand"
    overflow='hidden'
    align='center' 
    justify='center'
    height="medium"
    margin={{left: "large", right: "large"}}
  >
    <Carousel fill>
      <Image
        fit="cover"
        alignSelf="center"
        src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/15002366_1390047507702480_3399042522196563818_o.jpg?_nc_cat=105&_nc_ht=scontent.fyyz1-1.fna&oh=75118d3c1e9177f277a9f0db625dd69d&oe=5D0CE952"
      />
      <Image
        fit="cover"
        alignSelf="center"
        src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/16179805_1353691424681532_1863141769273328124_o.jpg?_nc_cat=107&_nc_ht=scontent.fyyz1-1.fna&oh=abcadb245bfb2c081e19b09813aa083e&oe=5D051D42"
      />
      <Image
        fit="cover"
        alignSelf="center"
        src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.0-8/16179717_1353697871347554_4799742379663058865_o.jpg?_nc_cat=102&_nc_ht=scontent.fyyz1-1.fna&oh=df5db04ca1804efe9beede15a028cf5e&oe=5D4FD07A"
      />
    </Carousel>
  </Box>
);

// const Work = (props) => (
//   <Box
//     width="large"
//     align="center"
//   >
//     <ResponsiveContext.Consumer>
//     {(size) => {
//       if (size == "small") {
//         return (
//           <Grid
//             rows={['xsmall', 'xsmall']}
//             columns={['medium']}
//             gap="large"
//             areas={[
//               { name: 'header', start: [0, 0], end: [0, 0] },
//               { name: 'nav', start: [0, 1], end: [0, 1] },
//             ]}
//           >
//             <Box gridArea="header" background="brand">
//               <Image
//                   fit="contain"
//                   src="https://www.workintech.ca/images/111/default/td-bank-financial-group_logo_201702281442012.png"
//               />
//             </Box>
//             <Box gridArea="nav" background="brand">
//               <Image
//                   fit="contain"
//                   src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Celestica_logo.svg/1200px-Celestica_logo.svg.png"
//               />
//             </Box>
//           </Grid>
//         )
//       }
//       return (
//         <Grid
//           rows={['small']}
//           columns={['medium', 'medium']}
//           gap="large"
//           areas={[
//             { name: 'header', start: [0, 0], end: [0, 0] },
//             { name: 'nav', start: [1, 0], end: [1, 0] },
//           ]}
//         >
//           <Box gridArea="header" background="brand">
//             <Image
//                 fit="contain"
//                 src="https://www.workintech.ca/images/111/default/td-bank-financial-group_logo_201702281442012.png"
//             />
//           </Box>
//           <Box gridArea="nav" background="brand">
//             <Image
//                 fit="contain"
//                 src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Celestica_logo.svg/1200px-Celestica_logo.svg.png"
//             />
//           </Box>
//         </Grid>
//       )
//     }}
//   </ResponsiveContext.Consumer>
//   </Box>
// )

const Work = (props) => (
  <Box width="large">
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">developer co-op @ td innovation lab</Text>
      <Text weight="bold">may 2018 to aug 2018</Text>
      <Text>mobile app development for android & ios</Text>
      <Text>used kotlin, java, swift, & react native</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">it application intern @ celestica</Text>
      <Text weight="bold">may 2017 to apr 2018</Text>
      <Text>app development with python & javascript</Text>
      <Text>sql query creation</Text>
    </Box>
  </Box>
)

const Awards = (props) => (
  <Box width="large">
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">best use of particle iot @ makeuoft</Text>
      <Text>feb 2019</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">best use of algolia @ mhacks 11</Text>
      <Text>oct 2018</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">cibc client experience hack @ ruhacks</Text>
      <Text>may 2018</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">best green hack @ echacks</Text>
      <Text>nov 2017</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">2nd place @ echacks</Text>
      <Text>nov 2017</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">finalist @ hack the north</Text>
      <Text>sept 2017</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">dean's honor list @ western university</Text>
      <Text>apr 2017</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">2nd place @ qhacks</Text>
      <Text>feb 2017</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">best use of indico api @ qhacks</Text>
      <Text>feb 2017</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">1st place @ hackwestern</Text>
      <Text>oct 2016</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">3rd place @ wearhackskw</Text>
      <Text>mar 2016</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">best hardware hack @ hackwestern</Text>
      <Text>nov 2015</Text>
    </Box>
  </Box>
)

const Projects = (props) => (
  <Box width="large">
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">medication dedication</Text>
      <Text weight="bold">feb 2019</Text>
      <Text>iot pill monitoring solution</Text>
      <Text>front-end built with flutter</Text>
      <Text>back-end built with nodejs & azure sql database</Text>
      <Text>hardware built with arduino & particle photon</Text>
      <Box direction="row">
        <a href="https://devpost.com/software/medication-dedication">
          <Text margin={{right: "small"}}>devpost</Text>
        </a>
        <a href="https://github.com/iYung/med-ded-client-app">
          <Text>github</Text>
        </a>
      </Box>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <Text weight="bold">depository repository</Text>
      <Text weight="bold">nov 2018</Text>
      <Text>airbnb style app for storage space</Text>
      <Text>front-end built with react native</Text>
      <Text>back-end built with python, stdlib & algolia</Text>
      <Text>hardware built with dragonboard 410c</Text>
      <Box direction="row">
        <a href="https://devpost.com/software/depository-repository">
          <Text margin={{right: "small"}}>devpost</Text>
        </a>
        <a href="https://github.com/pwnedpixel/repository-depository">
          <Text>github</Text>
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
          <Text margin={{right: "small"}}>devpost</Text>
        </a>
        <a href="https://github.com/iYung/mhacks11">
          <Text>github</Text>
        </a>
      </Box>
    </Box>
  </Box>
)

const Articles = (props) => (
  <Box width="large">
    <Box margin={{bottom: "medium"}}>
      <a href="https://medium.freecodecamp.org/a-beginners-guide-to-training-and-deploying-machine-learning-models-using-python-48a313502e5a">
        <Text weight="bold">a beginner's guide to training and deploying machine learning models using python</Text>
      </a>
      <Text>jun 2018 on freecodecamp</Text>
    </Box>
    <Box margin={{bottom: "medium"}}>
      <a href="https://medium.com/td-lab/an-introductory-guide-to-android-jetpack-slices-9f49a001be3b">
        <Text weight="bold">an introductory guide to android jetpack slices</Text>
      </a>
      <Text>may 2018 on td lab</Text>
    </Box>
  </Box>
)

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
