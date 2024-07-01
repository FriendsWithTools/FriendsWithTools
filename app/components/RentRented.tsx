import React, { useState, useEffect } from 'react';
import ToolsToRent from './ToolsToRent';
import SentRequests from './SentRequests';
import ReceivedRequests from './ReceivedRequests';
import { ToolCard as ToolType, ToolRequest as RequestType } from '../lib/types';

const fetchTools = async (ownerId: string): Promise<ToolType[]> => {
  try {
    const response = await fetch(`/api/myTools?ownerId=${ownerId}`);
    const data = await response.json();
    console.log('Tools:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch tools:', error);
    return [];
  }
};

const fetchRequests = async (userId: string): Promise<{ sent: RequestType[], received: RequestType[] }> => {
  try {
    const response = await fetch(`/api/myRequests?userId=${userId}`);
    const data = await response.json();
    console.log('Requests:', data);

    const sentRequests = data.filter((request: RequestType) => request.userId === userId);
    const receivedRequests = data.filter((request: RequestType) => request.userId == userId);

    return { sent: sentRequests, received: receivedRequests };
  } catch (error) {
    console.error('Failed to fetch requests:', error);
    return { sent: [], received: [] };
  }
};

const RentRented = () => {
  const [activeComponent, setActiveComponent] = useState<string>('toolsToRent');
  const [tools, setTools] = useState<ToolType[]>([]);
  const [sentRequests, setSentRequests] = useState<RequestType[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<RequestType[]>([]);
  // const userId = process.env.HARDCODED_ID || '64243b6a-2c1b-4277-b77f-0cf29fe39109'; 
  const userId = '459911db-39f7-4838-a4b6-bd41c3ee93b9'; // Replace with the actual userId

  useEffect(() => {
    const ownerId = '459911db-39f7-4838-a4b6-bd41c3ee93b9'; // Replace with the actual ownerId

    if (activeComponent === 'toolsToRent') {
      fetchTools(ownerId).then(setTools);
    } else {
      fetchRequests(userId).then(data => {
        console.log('Fetched requests:', data);
        setSentRequests(data.sent);
        setReceivedRequests(data.received);
      });
    }
  }, [activeComponent]);

  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className='flex justify-around items-center'>
      <div>
        <button
          className={`w-40 rounded-none rounded-tl-lg rounded-bl-lg px-4 py-2 ${
            activeComponent === 'toolsToRent'
              ? 'bg-darkGreen text-white md:hover:bg-lightGreen'
              : 'bg-gray-200 text-gray-700'
          } transition ease-in-out duration-500`}
          onClick={() => handleClick('toolsToRent')}
        >
          My Listed Tools
        </button>
        <button
          className={`w-40 rounded-none px-4 py-2 ${
            activeComponent === 'sentRequests'
              ? 'bg-darkGreen text-white md:hover:bg-lightGreen'
              : 'bg-gray-200 text-gray-700'
          } transition ease-in-out duration-500`}
          onClick={() => handleClick('sentRequests')}
        >
          Sent Requests
        </button>
        <button
          className={`w-40 rounded-none rounded-tr-lg rounded-br-lg px-4 py-2 ${
            activeComponent === 'receivedRequests'
              ? 'bg-darkGreen text-white md:hover:bg-lightGreen'
              : 'bg-gray-200 text-gray-700'
          } transition ease-in-out duration-500`}
          onClick={() => handleClick('receivedRequests')}
        >
          Received Requests
        </button>
        {activeComponent === 'toolsToRent' && <ToolsToRent tools={tools} />}
        {activeComponent === 'sentRequests' && <SentRequests requests={sentRequests} />}
        {activeComponent === 'receivedRequests' && <ReceivedRequests requests={receivedRequests} />}
      </div>
    </div>
  );
};

export default RentRented;
