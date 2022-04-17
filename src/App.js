import React from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
// components
import {Avatar, Description, Footer, Header, Range, Title} from "./components"

//svg
import {ReactComponent as MailIcon} from "./assets/img/mail.svg";
import {ReactComponent as PhoneIcon} from "./assets/img/phone.svg";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: #fff;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
  @media print {
    box-shadow: none;
    border: none;
    p {
      font-size: 120% !important;
    }
  }
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const SideBar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const App = () => {

  const [skillsCounter, setSkillsCounter] = React.useState(1)
  const [worksCounter, setWorksCounter] = React.useState(1)

  const componentRef = React.useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  return (<div className='ui-wrapper'>
    <Header onClick={handlePrint}/>
    <div className='ui-content-wrapper'>
      <Wrapper ref={componentRef}>
        <div className='ui-container'>
          <Row itemsCenter>
            <SideBar>
              <Avatar/>
            </SideBar>
            <Content>
              <Title>Nick Gerner</Title>
              <Description>
                Experienced Software & Machine Learning Engineer with a
                demonstrated history.
              </Description>
            </Content>
          </Row>

          <Row>
            <SideBar>
              <Title size='3' isUppercase>
                About me:
              </Title>
              <Description>Software Engineer</Description>
              <Description isSecondary>Washington, DC | tocode.ru</Description>

              <Description isPrimary style={{marginTop: '2rem'}}>
                <MailIcon style={{marginRight: '0.5rem'}}/>
                nick@gmail.com
              </Description>

              <Description isPrimary><PhoneIcon style={{marginRight: '0.5rem'}}/>+1 588-6500</Description>
            </SideBar>

            <Content>
              <Title size='3' isUppercase>
                Education:
              </Title>
              <Description>Stanford University - BS Electrical Engineering</Description>

              <Title size='3' isUppercase isShownButton onClick={() => setWorksCounter(worksCounter + 1)}
                     style={{marginTop: '3.6rem'}}>
                Work experience:
              </Title>
              {new Array(worksCounter).fill(1).map((_, i) => <Description key={i}>{i + 1}. Solutions Architect,
                Stripe.</Description>)}


              <Title size='3' isShownButton onClick={() => setSkillsCounter(skillsCounter + 1)} isUppercase
                     style={{marginTop: '3rem'}}>
                Skills:
              </Title>
              {new Array(skillsCounter).fill(1).map((_, i) => <Range key={i}/>)}

            </Content>
          </Row>
        </div>
      </Wrapper>
    </div>
    <Footer/>
  </div>)
}

export default App