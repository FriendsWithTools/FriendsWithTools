import React, { useState, useEffect } from 'react';
import { ToolRequest as RequestType, ToolCard as ToolType } from '../lib/types';

const ReceivedRequests = ({ requests }: { requests: RequestType[] }) => {
  const [statusFilter, setStatusFilter] = useState<string>('pending');
  const [filteredRequests, setFilteredRequests] = useState<RequestType[]>([]);
  const [tools, setTools] = useState<Array<{ tool: ToolType; request: RequestType }>>([]);

  useEffect(() => {
    setFilteredRequests(requests.filter(request => request.status === statusFilter));
  }, [statusFilter, requests]);

  useEffect(() => {
    const fetchTools = async () => {
      const toolData = await Promise.all(
        filteredRequests.map(async (request) => {
          const response = await fetch(`/api/tools/${request.toolId}`);
          const tool = await response.json();
          return { tool, request };
        })
      );
      setTools(toolData);
    };

    if (filteredRequests.length > 0) {
      fetchTools();
    }
  }, [filteredRequests]);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
  };

  const handleUpdateStatus = async (requestId: string, status: string) => {
    try {
      const response = await fetch(`/api/myRequests/${requestId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update request status');
      }

      setTools(tools.map(({ tool, request }) => (
        request.id === requestId ? { tool, request: { ...request, status } } : { tool, request }
      )));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <select
        value={statusFilter}
        onChange={handleStatusChange}
        className="mb-4 p-2 border rounded"
      >
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="declined">Declined</option>
      </select>
      <div className="flex flex-wrap justify-center">
        {tools.map(({ tool, request }) => (
          <div key={request.id} className="border-slate-50 border-4 p-4 rounded-xl shadow-md flex flex-col items-center m-4">
            <div
              className="relative w-full h-64 rounded-m overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${tool.picture || 'https://shorturl.at/PyeKu'})` }}
            />

            <div className="w-full mt-4 p-4 bg-white rounded-lg shadow-md">
              <h1 className="text-lg font-semibold">{tool.name}</h1>
              <p className="text-gray-600">{tool.description}</p>
            </div>

            <div className="w-full mt-4 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">Request Information</h2>
              <p className="text-gray-600">Status: {request.status}</p>
              <p className="text-gray-600">Request Sent: {new Date(request.createdAt).toLocaleDateString()}</p>
            </div>

            {request.status === 'pending' && (
              <div className="flex space-x-4">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded mt-2"
                  onClick={() => handleUpdateStatus(request.id, 'accepted')}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded mt-2"
                  onClick={() => handleUpdateStatus(request.id, 'declined')}
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceivedRequests;
