"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = 'nfxa5rw3rwqf';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: Capitalize(slug) + ' Discussions',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);

  if (!client) return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-lg font-semibold text-gray-600">
      Setting up client & connection...
    </div>
  );

  return (
    <div className="flex h-screen w-full flex-col items-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">
          {Capitalize(slug)} Discussions
        </h2>
        <Chat client={client} theme="messaging light">
          <Channel channel={channel}>
            <Window>
              <ChannelHeader className="border-b pb-2" />
              <div className="overflow-y-auto max-h-[70vh]">
                <MessageList className="p-2" />
              </div>
              <div className="border-t pt-2">
                <MessageInput className="rounded-lg bg-gray-100 p-2 focus:ring-2 focus:ring-blue-500" />
              </div>
            </Window>
            <Thread className="mt-4" />
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default ChatForum;