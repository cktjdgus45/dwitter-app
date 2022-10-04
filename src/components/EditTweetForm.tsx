import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-top: 10px;
`
const InputTextArea = styled.input`
    width: 100%;
    font-size: ${props => props.theme.fontSize.small};
    `

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
`;

const UpdateButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontSize.middle};
    width: auto;
    height: auto;
    font-weight: 600;
    background-color: ${props => props.theme.color.bluesky};
    color: ${props => props.theme.color.white};
    border: none;
    border-radius: 2px;
    margin-right: 5px;
    cursor:pointer;
`
const CancelButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.theme.fontSize.middle};
    width: auto;
    height: auto;
    font-weight: 600;
    background-color: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
    border: none;
    border-radius: 2px;
    margin-right: 5px;
    cursor:pointer;
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
    create(tweet: string): Promise<Tweet>;
    read(): Promise<Tweet>;
    update(target: string, id: number): Promise<Tweet>;
    delete(target: string): Promise<Tweet>;
}
interface IProps {
    tweetEditor: TweetEditor;
    onUpdate: Function;
    tweet: Tweet;
    setEditing: Function;
}
const EditTweetForm = ({ tweetEditor, onUpdate, tweet, setEditing }: IProps) => {
    const { text, id } = tweet;
    const [value, setValue] = useState<string>(text);
    const [error, setError] = useState<string>();
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        value && tweetEditor.update(value, id)
            .then(updated => {
                setValue(() => "");
                onUpdate(updated, id);
            })
            .catch((error: Error) => {
                setError(error.message);
            })
    }
    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Form>
            {error && <span>{error}</span>}
            <InputTextArea value={value || ""} onChange={onChange} placeholder='Edit your tweet'></InputTextArea>
            <ButtonWrapper>
                <UpdateButton onClick={onSubmit}>Update</UpdateButton>
                <CancelButton onClick={() => setEditing(() => false)}>Cancel</CancelButton>
            </ButtonWrapper>
        </Form>
    )
}

export default EditTweetForm;