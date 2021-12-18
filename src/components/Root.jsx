import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './ChatFeed'
import '../style/style.css'
import LoginForm from './LoginForm'

const Root = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height='100vh'
            projectID={process.env.REACT_APP_PROJECT_ID}
            // userName={process.env.REACT_APP_USER_NAME}
            // userSecret={process.env.REACT_APP_USER_SECRET}

            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
            // renderIsTyping={(typers) => <div>{typers.map(typer => `${typer.name} is typing...`)}</div>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            offset={+6}
        />
    )
}

//infinite scroll, logout, more customization

export default Root
