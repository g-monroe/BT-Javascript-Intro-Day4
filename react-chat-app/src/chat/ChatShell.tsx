import React from 'react';
import { Chat } from '../dtos/chat';
import io from "socket.io-client";
import { ChatEvents } from '../dtos/chatEvents';

export interface IChatShellProps {

}
export interface IChatShellState {

}

export default class ChatShell extends React.PureComponent<IChatShellProps, IChatShellState> {
    static defaultProps = {

    }

    socket!: SocketIOClient.Socket;

    componentWillMount() {
        this.socket = io('localhost:3500');
        this.socket.on(ChatEvents.Login, (messages: Chat[]) => {
            // TODO: Set State (if needed)
        });
        this.socket.on(ChatEvents.NewMessage, (message: Chat) => {
            // TODO: Set State (if needed)
        });
    }
    componentWillUnmount() {
        this.socket.close();
    }

    onUsernameEntered = (username: string) => {
        this.socket.emit(ChatEvents.Connect,
            // TODO: Send Username, this can be hardcoded for now
        );
        // TODO: Set State (if needed)
    };

    onMessageEntered = (message: string | null) => {
        this.socket.emit(ChatEvents.NewMessage,
            // TODO: Send Username, this can be hardcoded for now
            // TODO: Send Message
        );
        // TODO: Set State (if needed)
    };

    render() {

        return (
            <div>
                Chat Shell
            </div>
        );
    }
}
