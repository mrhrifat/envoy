import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './ChatFeed'
import '../style/style.css'

const Root = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={process.env.REACT_APP_USER_NAME}
            // userName='mrhrifat'
            userSecret={process.env.REACT_APP_USER_SECRET}
            // userSecret='[three5]'
            renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
        />
    )
}

export default Root
