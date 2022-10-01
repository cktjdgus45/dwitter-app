import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: grid;
    grid-template-columns: 15% 75% 10%;
    width: 100%;
    height: 120px;
    background-color: green;
    margin-bottom: 15px;
    box-shadow: ${props => props.theme.boxShadow};
`;
const Profile = styled.div`
    width: 100%;
    background-color: red;
`;
const Writer = styled.div`
    width:100%;
    background-color: yellow;
`;
const Edit = styled.div`
    width:100%;
    background-color: orange;
`;

type Tweet = {
    name: string,
    email: string,
    profileUrl: string,
    createdAt: string,
}
const tweets: Tweet[] = [
    {
        name: 'popo',
        email: '@popo',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: 'just now'
    },
    {
        name: 'bob',
        email: '@bob',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: '3 seconds ago'
    },
    {
        name: 'elli',
        email: '@elli',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: '5 days ago'
    },
]

const Tweets = () => {
    return (
        <>
            {
                tweets.map(tweet => (
                    <Card>
                        <Profile></Profile>
                        <Writer></Writer>
                        <Edit></Edit>
                    </Card>
                ))
            }
        </>
    )
}

export default Tweets;