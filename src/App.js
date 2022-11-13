import './index'
import Card from 'react-bootstrap/Card'
import emailLogo from './Images/emailLogo.png'
import githubLogo from './Images/github.png'
import linkedInLogo from './Images/linkedIn.png'

function App() {
  return (
    <div className="App">
      <div className="portfolioHeader">       
        <h1>Gil Pena Portfolio</h1>
      </div>

    <hr/>

      <div className='flexRow'>
          <Card style={{flex: 4}}>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text> I am currently a full-time junior attending UNLV with a major in Computer Science. 
                I have taken courses in data structures, object-oriented programming, and internet programming. 
                I am seeking an internship in software where I can apply my skills and build upon what I
                have learned in my education.</Card.Text>
            </Card.Body> 
          </Card>
      </div>

      <div className='flexRow'>
        
          <Card style ={{flex: 1}}>
            <Card.Body>
              <Card.Title>Education </Card.Title>
              <Card.Subtitle>2020-Present</Card.Subtitle>
              <Card.Text> Univserity of Las Vegas Nevada<br/>Major: Computer Science<br/>GPA 3.77</Card.Text>
            </Card.Body> 
          </Card>
          <Card style ={{flex: 1}}>
            <Card.Body>
              <Card.Title>Projects/Resume </Card.Title>
              <a href='./Images/ResumeUpdated.pdf' target='_blank' rel ="noreferrer"> Resume Link</a>
            </Card.Body> 
          </Card>
          <Card style ={{flex: 1}}>
            <Card.Body>
              <Card.Title> Skills </Card.Title>
              <Card.Text> C++ <br/> Python <br/> JavaScript</Card.Text>
            </Card.Body> 
          </Card>
        </div>

        <div className='flexRow'>
          <Card style ={{flex:1}}>
          <Card.Img className="logos" src={githubLogo}></Card.Img>
            <Card.Body>
              <Card.Text> <a href='https://github.com/gilpenajr' target='_blank' rel ="noreferrer">GitHub Link </a></Card.Text>
            </Card.Body> 
          </Card>
          <Card style ={{flex:1}}>
            <Card.Img className="logos" src={linkedInLogo} style={{marginTop: 10, marginLeft: 10}}></Card.Img>
            <Card.Body>
            <Card.Text> <a href='https://www.linkedin.com/in/gildardo-p/' target='_blank' rel ="noreferrer"> LinkedIn Link </a></Card.Text>
            </Card.Body> 
          </Card>
          <Card style ={{flex:1}}>
            <Card.Body>
            <Card.Img className="logos" src={emailLogo} ></Card.Img>
              <Card.Text> <a href="mailto: gildardopenajr@gmail.com"> gildardopenajr@gmail.com </a> </Card.Text>
              <Card.Text><a href='./Images/ResumeUpdated.pdf'> Resume Link</a></Card.Text>
            </Card.Body> 
          </Card>
        </div>
      </div>
  );
}
 
export default App;