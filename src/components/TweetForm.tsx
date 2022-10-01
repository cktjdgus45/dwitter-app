import React from 'react';
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
    padding: 1px;
    font-size: ${props => props.theme.fontSize.small};
    margin: 0 5px;
    height: 40%;
    border: 2px dotted ${props => props.theme.color.bluesky};
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
const TweetForm = () => {
    return (
        <Form>
            <InputTextArea placeholder='Edit your tweet'></InputTextArea>
            <SubmitButton>Post</SubmitButton>
        </Form>
    )
}

export default TweetForm;