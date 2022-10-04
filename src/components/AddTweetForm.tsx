import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    height: 6%;
    display:flex;
    align-items: center;
    background-color: ${props => props.theme.color.grey};
`
const InputTextArea = styled.input`
    width: 90%;
    font-size: ${props => props.theme.fontSize.small};
    margin: 0 5px;
    height: 40%;
    padding: 15px 3px;
    border: none;
    `
const SubmitButton = styled.button`
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
    cursor: pointer;
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
    update(target: string): Promise<Tweet>;
    delete(target: string): Promise<Tweet>;
}
interface IProps {
    tweetEditor: TweetEditor;
    onCreate: Function;
}

const AddTweetForm = ({ tweetEditor, onCreate }: IProps) => {
    const [value, setValue] = useState<string>();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        value && tweetEditor
            .create(value)
            .then(tweet => {
                setValue(() => "");
                onCreate(tweet)
            })
    }
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <Form onSubmit={onSubmit}>
            <InputTextArea value={value || ""} onChange={onChange} placeholder='Write your tweet'></InputTextArea>
            <SubmitButton>Post</SubmitButton>
        </Form>
    )
}

export default AddTweetForm;