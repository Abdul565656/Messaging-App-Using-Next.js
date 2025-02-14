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
    <div className="flex h-screen w-full flex-col items-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-6">
      <div className="w-full max-w-6xl rounded-xl bg-white/10 backdrop-blur-lg p-8 shadow-2xl border border-white/20 hover:border-blue-400/30 transition-all duration-300">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          {Capitalize(slug)} Discussions
        </h2>
        <Chat client={client} theme="messaging light">
          <Channel channel={channel}>
            <Window>
              <ChannelHeader 
                className="border-b border-gray-200/20 pb-4 text-white font-semibold backdrop-blur" 
              />
              <div className="overflow-y-auto max-h-[65vh] scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
                <MessageList 
                  className="p-4"
                  messageActions={["edit", "delete", "react", "reply"]}
                />
              </div>
              <div className="border-t border-gray-700 pt-3">
                <MessageInput 
                  className="rounded-lg bg-gray-700 p-3 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  focus
                  attachButton
                  emojiPicker
                />
              </div>
            </Window>
            <Thread 
              className="mt-4 bg-gray-800/50 rounded-lg p-4 border border-purple-500/20"
            />
          </Channel>
        </Chat>
      </div>
    </div>
  );
};

export default ChatForum;