import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// @ts-ignore
import AddTweetForm from './AddTweetForm.tsx';

// @ts-ignore
import TweetCards from './TweetCards.tsx';




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
    tweetEditor: TweetEditor;
}

const Tweets = ({ tweetEditor }: IProps) => {
    const [tweets, setTweets] = useState<Tweet[]>();
    const onCreate = (tweet) => {
        setTweets((prev) => {
            if (!prev) return;
            return [tweet, ...prev];
        });
    }


    useEffect(() => {
        tweetEditor
            .read()
            .then(tweets => setTweets([...tweets]));
    }, [tweetEditor])
    return (
        <>
            <AddTweetForm onCreate={onCreate} tweetEditor={tweetEditor} />
            <TweetCards tweets={tweets} setTweets={setTweets} tweetEditor={tweetEditor}></TweetCards>

        </>
    )
}

export default Tweets;