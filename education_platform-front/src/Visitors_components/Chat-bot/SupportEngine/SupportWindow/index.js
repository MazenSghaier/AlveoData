import React, { useState } from "react"

import { styles } from "../styles";

import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState(null)

    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
            

            <ChatEngine 
                visible={true}
                user={user} 
                chat={chat} 
            />
        </div>
    )
}

export default SupportWindow;
