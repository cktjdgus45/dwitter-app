import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import Header from './components/Header.tsx';
// @ts-ignore
import TweetForm from './components/TweetForm.tsx';
// @ts-ignore
import Tweets from './components/Tweets.tsx';

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
`
const Board = styled.section`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 0px 20px ;
  width: 100%;
  height: 84%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
  background: ${props => props.theme.color.bluesky};
}

&::-webkit-scrollbar-thumb {
  background: ${props => props.theme.color.bluesky};
} 
`

type TweetEditor = {};
interface IProps {
  tweetEditor: TweetEditor;
}

const App = ({ tweetEditor }: IProps) => {

  return (
    <Wrapper>
      <Container>
        <Header />
        <TweetForm tweetEditor={tweetEditor} />
        <Board>
          <Tweets tweetEditor={tweetEditor} />
        </Board>
      </Container>
    </Wrapper>
  )
}

export default App;