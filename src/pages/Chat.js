import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import MessageBox from "../components/MessageBox";
import Header from "../components/Header";
import Messages from "../components/Messages";
import { useQuery, gql, useMutation, useSubscription } from "@apollo/client";
const GET_MESSAGES = gql`
  query GetMessages {
    messages {
      id
      receiver {
        id
      }
      sender {
        id
      }
      text
    }
  }
`;
const CREATE_MESSAGE = gql`
  mutation addMessage($senderId: ID!, $receiverId: ID!, $text: String!) {
    addMessage(sender_id: $senderId, receiver_id: $receiverId, text: $text) {
      id
      receiver {
        id
      }
      sender {
        id
      }
      text
    }
  }
`;

const NEW_MESSAGE = gql`
  subscription {
    messageAdded {
      id
      receiver {
        id
        name
      }
      sender {
        id
        name
      }
      text
    }
  }
`;
const Chat = () => {
  const { data } = useQuery(GET_MESSAGES);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [addMessage] = useMutation(CREATE_MESSAGE);
  useEffect(() => {
    if (data) {
      setMessages(data.messages);
    }
  }, [data]);
  const { data: newMessage } = useSubscription(NEW_MESSAGE);
  useEffect(() => {
    if (newMessage) {
      setMessages((prevMessages) => [...prevMessages, newMessage.messageAdded]);
    }
  }, [newMessage]);
  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    addMessage({
      variables: {
        senderId: parseInt(localStorage.senderId),
        receiverId: parseInt(localStorage.receiverId),
        text: inputMessage,
      },
    });
    setInputMessage("");
  };

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <Header />
      <Divider />
      {messages.length > 0 && <Messages messages={messages} />}
      <MessageBox
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
