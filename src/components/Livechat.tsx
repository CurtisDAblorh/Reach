import React, { useState, useEffect, useRef } from "react";
import { DateTime } from "luxon";

const Livechat: React.FC = () => {
  const [messages, setMessages] = useState<UserData[]>([]); //state management to store and update message array
  const [inputValue, setInputValue] = useState<string>(""); //state variable to store the value of the input field
  const [ws, setWs] = useState<WebSocket | null>(null); //state to hold the websocket connection
  const [currentTime, setCurrentTime] = useState<string[]>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  type UserData = {
    name: string;
    picture: string;
    message: string;
  };

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket("wss://ttchatsocket.lumi.systems:443/");

    socket.onopen = () => {
      console.log("WebSocket connected");
      setWs(socket);
    }; //Event handler to open websocket

    socket.onmessage = (event) => {
      const incomingMessage: UserData = JSON.parse(event.data); // Parse message to convert string into object usable by me to display in UI
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
      const timeNow = DateTime.now().toFormat("hh:mm:ss a");
      setCurrentTime((prevTimes) => [...prevTimes, timeNow]);
      scrollToBottom(); // Scroll to the bottom when a new message arrive
    }; //Event handler which receives message and updates messages state with new message

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      setWs(null); //When the connection closes logs disconnection message and sets websocket to null instead of url (allowed to signify no input)
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []); // Only run once on mount

  const sendMessage = () => {
    if (ws && inputValue.trim() !== "") {
      ws.send(inputValue);
      setInputValue("");
    } else {
      setInputValue("");
    }
  }; //send messages via websocket - checks if ws is not null and then removes empty space and checks the value is not null then sends the input value and sets new input to empty string

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll when new messages arrive

  return (
    <div className=" md:ml-4 bg-slate-300 flex flex-col max-h-max rounded-md border-2 border-white-600 w-96 ">
      <p className="rounded-t-md bg-slate-400/[0.5] border-b-2 font-bold text-lg p-4  hover:bg-blue-400">
        Live Chat
      </p>
      <div  ref={messagesContainerRef}
      className="flex-1 p-1 overflow-y-auto  hover:bg-blue-400 max-h-[30vh] flex-grow ">
        {messages.map((message, index) => (
          <div key={index} className="flex mb-2">
            <img
              className="rounded-full w-12 h-12 m-auto border-2"
              src={message.picture}
            />

            <div className="pl-1 leading-none	">
              <h3 className="font-bold text-xs pt-2">{message.name}</h3>
              <div className=" text-xs">{currentTime[index]}</div>
              <span className=" text-xs  text-black">{message.message}</span>
            </div>
          </div>
        ))}
        
      </div>
      
      <div className="flex items-center p-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 mr-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Livechat;
