import { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat, setSelectedChat, user } = ChatState();
  return (
    <div>
      Single Chat
    </div>
  )
}

export default SingleChat
