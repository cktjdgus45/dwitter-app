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
const Delete = styled.button`
    margin-bottom: 30px;
    color: ${props => props.theme.color.bluesky};
    cursor:pointer;

`;
const Edit = styled.button`
    color: ${props => props.theme.color.bluesky};
    cursor:pointer;
`;
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
    tweet: Tweet;
}

const TweetCard = ({ tweet, tweetEditor }: IProps) => {
    const onDelete = () => { };
    const onEdit = () => { };
    return (
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
                <Message>{tweet.text}</Message>
            </WriterField>
            <EditField>
                <Delete onClick={onDelete}>x</Delete>
                <Edit onClick={onEdit}>✎</Edit>
            </EditField>
        </Card>
    )
}

export default TweetCard;