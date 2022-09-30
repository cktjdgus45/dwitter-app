import React from 'react';
import styled from 'styled-components';
import Header from './components/Header.tsx';
import TweetForm from './components/TweetForm.tsx';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.color.blue};
`

const Container = styled.div`
  /* have to modify width later */
  width: 700px;
  height: 100%;
  background-color: ${props => props.theme.color.white};

/* &::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
  background: ${props => props.theme.color.bluesky};
}

&::-webkit-scrollbar-thumb {
  background: ${props => props.theme.color.bluesky};
} */
/* have to scroll to tweets section */
`

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Header></Header>
        <TweetForm></TweetForm>
      </Container>
    </Wrapper>
  )
}

export default App;