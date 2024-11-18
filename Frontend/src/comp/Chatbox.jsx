import React from 'react'
import udp from "../../public/udp.jpeg";
function Chatbox() {
  return (
    <>
      <div className="flex flex-col bg-gray-200 lg:h-[800px] h-[605px] w-full rounded-md p-4 mt-1">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={udp}
            className="w-16 h-16 rounded-full"
            alt="User Profile"
          />
          <div>
            <h1 className="text-xl font-bold text-black">Paul Stirling</h1>
            <h4 className="text-sm text-gray-500">typing...</h4>
          </div>
        </div>

        <div className="flex flex-col flex-grow bg-white rounded-md shadow-md p-4 overflow-y-auto">
          <div className="flex flex-row mb-3">
            <p className="bg-gray-300 text-black p-2 rounded-md max-w-sm self-start">
              Hi, how are you doing?
            </p>
            <h6 className="justify-self-end py-2 px-2"> 4:15 PM</h6>
          </div>
          <div className=" flex flex-row mb-3 self-end">
            <h6 className="justify-self-start py-2 px-2"> 4:19 PM</h6>
            <p className="bg-purple-600 text-white p-2 rounded-md max-w-sm">
              I'm doing great! How about you?
            </p>
          </div>
          <div className="flex flex-row mb-3">
            <p className="bg-gray-300 text-black p-2 rounded-md max-w-sm self-start">
              All good here!
            </p>
            <h6 className="justify-self-end py-2 px-2"> 4:20 PM</h6>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow outline-none p-2"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md ml-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbox
