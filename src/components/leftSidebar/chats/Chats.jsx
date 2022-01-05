import React from 'react';
import ChatItem from "./ChatItem";
import {chats} from "../../../data";

const Chats = () => {
  return (
    <div className="chat-message-list" data-simplebar="">

      <ul className="list-unstyled chat-list chat-user-list">

        {
          chats.map(chat =>
            <ChatItem chat={chat} active={false}/>
          )
        }

      </ul>
    </div>
  );
};

export default Chats;
