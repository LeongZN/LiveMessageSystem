import {MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd73ba89a-9737-447f-a773-8859f2ac7893', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
        </div>
    )
}

export default ChatsPage