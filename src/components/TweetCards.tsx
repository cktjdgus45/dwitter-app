import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import TweetCard from './TweetCard.tsx';


const TweetCardsList = styled.ul`
    width: 100%;
    height: 100%;
    padding: 20px 20px 0px 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      height: 80%;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.color.bluesky};
    } 
`

type Tweet = {
    id: number,
    name: string,
    username: string,
    profileUrl: string,
    createdAt: string,
    text: string,
}

type TweetEditor = {
    create(tweet: string): Promise<[]>;
    read(): Promise<[]>;
    update(target: string): Promise<[]>;
    delete(target: string): Promise<[]>;
}
interface IProps {
    tweets: Tweet[];
    setTweets: Function;
    tweetEditor: TweetEditor;
}

const TweetCards = ({ tweets, setTweets, tweetEditor }: IProps) => {
    const onUpdate = (updated, id) => {
        setTweets((prev) => {
            if (!prev) return;
            return prev.map(item => item.id === updated.id ? updated : item);
        });
    }
    const onDelete = (targetId) => {
        setTweets(tweets => tweets?.filter(item => item.id !== targetId));
    }
    return (
        <TweetCardsList>
            {
                tweets?.map(tweet => (
                    <TweetCard key={tweet.id} tweet={tweet} onDelete={onDelete} onUpdate={onUpdate} tweetEditor={tweetEditor} />
                ))
            }
        </TweetCardsList>
    )
}

export default TweetCards;