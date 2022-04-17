import React from 'react'
import styled from 'styled-components'

// components
import {Header, Footer, Avatar, Title, Description}
 from "./components"

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: #fff;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
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

  const handleAvatarClick = () => console.log('avatar clicked')
  const handlePrintClick = () => console.log('print clicked')

  return (
      <div className='ui-wrapper'>
        <Header onClick={handlePrintClick} />
        <div className='ui-content-wrapper'>
          <Wrapper>
            <div className='ui-container'>
              <Row itemsCenter>
                <Avatar onClick={handleAvatarClick} />
                <div>
                  <Title>Nick Gerner</Title>
                  <Description>
                    Experienced Software & Machine Learning Engineer with a
                    demonstrated history.
                  </Description>
                </div>
              </Row>

              <Row>
                <SideBar>
                  <Title size='3' isUppercase>
                    About me:
                  </Title>
                  <Description>Software Engineer</Description>
                  <Description isSecondary>Washington, DC | tocode.ru</Description>

                  <Description isPrimary style={{ marginTop: '2rem' }}>
                    nick@gmail.com
                  </Description>
                  <Description isPrimary>+1 588-6500</Description>
                </SideBar>

                <Content>
                  <Title size='3' isUppercase>
                    Education:
                  </Title>
                  <Description>Stanford University - BS Electrical Engineering</Description>

                  <Title size='3' isUppercase style={{ marginTop: '3.6rem' }}>
                    Work experience:
                  </Title>
                  <Description>Solutions Architect, Stripe.</Description>

                  <Title size='3' isUppercase style={{ marginTop: '3rem' }}>
                    Skills:
                  </Title>
                </Content>
              </Row>
            </div>
          </Wrapper>
        </div>
        <Footer />
      </div>
  )
}

export default App