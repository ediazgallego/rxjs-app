import { useLayoutEffect, useState } from 'react';

import chatStore from '../store/chat';

const FirstPerson = () => {
    const [chatState, setChatState] = useState(chatStore.initialState);

    useLayoutEffect(() => {
        chatStore.subscribe(setChatState);
        chatStore.init();
    }, []);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        const messageObject = {
            person: 'first-person',
            text: e.target.elements.messageInput.value.trim(),
        };
        chatStore.sendMessage(messageObject);
        //@ts-expect-error
        document.getElementById('messageForm').reset();
    }

    return (
        <div className='container'>
            <h2>Parchao</h2>
            <div className='chat-box'>
                {
                    chatState.data.map(message => (
                        <div>
                            <p className={
                                //@ts-expect-error
                                message.person}>{message.text}</p>
                            <div className='clear'></div>
                        </div>
                    ))
                }
            </div>
            <form id='messageForm' onSubmit={onFormSubmit}>
                <input
                    type='text'
                    id='messageInput'
                    name='messageInput'
                    placeholder='type here...'
                    required 
                />
                <button type='submit'>Send</button> <br />
            </form>
            <button className='clear-button' onClick={() => chatStore.clearChat()}>Clear chat</button>
        </div>
    )

}

export default FirstPerson;