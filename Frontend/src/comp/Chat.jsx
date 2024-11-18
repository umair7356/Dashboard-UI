import React, { useState } from "react";
import udp from "../../public/udp.jpeg";
import bglogo from "../../public/backerylogoo.png";
import { Search } from "lucide-react";
import Chatbox from "./Chatbox";

const Chat = () => {
  const [showChatbox, setShowChatbox] = useState(false);

  const messages = [
    {
      id: 1,
      name: "Andrew",
      message: "This is the first message.",
      time: "4:10 PM",
    },
    {
      id: 2,
      name: "Paul Stirling",
      message: "All good here!",
      time: "4:20 PM",
    },
    {
      id: 3,
      name: "Mark",
      message: "Can we reschedule the meeting?",
      time: "2:30 PM",
    },
    {
      id: 4,
      name: "Sarah",
      message: "I'll send the files later.",
      time: "1:15 PM",
    },
    {
      id: 5,
      name: "buttler",
      message: "I'll send the files later.",
      time: "1:15 PM",
    },
    {
      id: 6,
      name: "buttler",
      message: "I'll send the files later.",
      time: "1:15 PM",
    },
    {
      id: 7,
      name: "buttler",
      message: "I'll send the files later.",
      time: "1:15 PM",
    },
  ];

  const handleClickMessage = (id) => {
    setShowChatbox(true);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-row sm:flex-row sm:items-start gap-4 p-1">
          <div className="bg-gray-200 w-full sm:w-[400px] h-[600px] sm:h-[800px] rounded-md overflow-hidden shadow-md">
            <h1 className="text-2xl text-black font-bold p-4">Messages</h1>
            <div className="relative px-4">
              <input
                placeholder="Search ..."
                className="w-full h-11 pl-10 rounded-md border border-black"
                type="text"
              />
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-col h-full">
              <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100%-150px)]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="flex justify-between bg-white shadow-md rounded-md p-3 cursor-pointer"
                    onClick={() => handleClickMessage(message.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                        alt="user profile"
                        src={udp}
                      />
                      <div>
                        <h1 className="text-base sm:text-lg font-semibold text-black">
                          {message.name}
                        </h1>
                        <p className="text-sm text-gray-600 truncate max-w-[200px] overflow-hidden whitespace-nowrap ">
                          {message.message}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm h-5 w-16 mt-2 text-gray-500">
                      {message.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showChatbox ? (
          <div className="w-full bg-gray-200">
            <div className="flex justify-center items-center">
              <Chatbox />
            </div>
          </div>
        ) : (
          <div className="w-full bg-gray-200">
            <div className="flex justify-center items-center">
              <img src={bglogo} className="w-[800px] h-[800px] opacity-50" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
