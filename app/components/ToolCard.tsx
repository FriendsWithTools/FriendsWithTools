import React from 'react';
import Image from 'next/image';
import { ToolCard as ToolType } from '../lib/types';
import Liked from './Liked';

interface ToolCardProps {
  tool: ToolType;
}

const ToolCardComponent =  ( { tool }: ToolCardProps ) => {
  const defaultImage = '/placeholder.png'; // Path to your placeholder image
  return (
    <div className="bg-green p-4 rounded-lg shadow-md flex flex-col items-center m-8">
			<Liked />
      <div className="relative w-64 h-48 md:rounded-lg">
        <Image
          className=""
          src={tool.picture || defaultImage}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

			<div className="grid grid-cols-2 gap-20">
				<div className="mt-4 text-center flex flex-col items-left">
					<p className="text-lg font-semibold">{tool.name}</p>
					<p className="text-gray-600">{tool.location}</p>
					<h2 className="text-gray-600">{tool.ownerId}</h2>
				</div>
				<div><span className="flex items-right"><h1 className="text-xlg font-semibold text-gray-900 mt-2">${tool.dailyRate}</h1></span></div>
			</div>
    </div>
  );
};
export default ToolCardComponent;
