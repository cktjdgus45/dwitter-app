import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: grid;
    grid-template-columns: 15% 75% 10%;
    width: 100%;
    height: 120px;
    margin-bottom: 15px;
    box-shadow: ${props => props.theme.boxShadow};
`;
const ProfileField = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Profile = styled.div<{ filePath: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: url(${props => props.filePath});
    background-size: cover;
    background-position: center center;
  
`;
const WriterField = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding: 15px 5px;
`;
const Writer = styled.div`
    font-weight: 600;
    margin-bottom: 20px;
`;
const Message = styled.div`
    font-size: ${props => props.theme.fontSize.small};
`;
const Name = styled.span`
    color: ${props => props.theme.color.black};
    font-size: ${props => props.theme.fontSize.small};
`;
const Email = styled.span`
    margin: 0 5px;
    color: ${props => props.theme.color.bluesky};
    font-size: ${props => props.theme.fontSize.verySmall};
`;
const CreatedAt = styled.span`
    color: ${props => props.theme.color.grey};
    font-size: ${props => props.theme.fontSize.verySmall};
`;

const EditField = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Delete = styled.div`
    margin-bottom: 30px;
    color: ${props => props.theme.color.bluesky};
    cursor:pointer;

`;
const Edit = styled.div`
    color: ${props => props.theme.color.bluesky};
    cursor:pointer;
`;

type Tweet = {
    name: string,
    email: string,
    profileUrl: string,
    createdAt: string,
    message: string,
}
const tweets: Tweet[] = [
    {
        name: 'popo',
        email: '@popo',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: 'just now',
        message: 'sdfsdfsdf'
    },
    {
        name: 'bob',
        email: '@bob',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: '3 seconds ago',
        message: 'sdfsdfsdf'
    },
    {
        name: 'elli',
        email: '@elli',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: '5 days ago',
        message: 'sdfsdfsdf',
    }
]

const Tweets = () => {
    return (
        <>
            {
                tweets.map(tweet => (
                    <Card>
                        <ProfileField>
                            <Profile filePath={tweet.profileUrl}></Profile>
                        </ProfileField>
                        <WriterField>
                            <Writer>
                                <Name>
                                    {tweet.name}
                                </Name>
                                <Email>
                                    {tweet.email}
                                </Email>
                                <CreatedAt>
                                    {tweet.createdAt}
                                </CreatedAt>
                            </Writer>
                            <Message>{tweet.message}</Message>
                        </WriterField>
                        <EditField>
                            <Delete>❌</Delete>
                            <Edit>✂️</Edit>
                        </EditField>
                    </Card>
                ))
            }
        </>
    )
}

export default Tweets;