import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// @ts-ignore
import TweetCard from './TweetCard.tsx';
// @ts-ignore
import TweetForm from './TweetForm.tsx';



type Tweet = {
    id: number,
    name: string,
    email: string,
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
    const onUpdate = (updated, id) => {
        setTweets((prev) => {
            if (!prev) return;
            return prev.map(item => item.id === updated.id ? updated : item);
        });
    }

    useEffect(() => {
        tweetEditor
            .read()
            .then(tweets => setTweets([...tweets]));
    }, [tweetEditor])
    return (
        <>
            <TweetForm onCreate={onCreate} tweetEditor={tweetEditor} />
            {
                tweets?.map(tweet => (
                    <TweetCard key={tweet.id} tweet={tweet} onUpdate={onUpdate} tweetEditor={tweetEditor} />
                ))
            }
        </>
    )
}

export default Tweets;