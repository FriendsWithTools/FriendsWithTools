// import React from 'react';
// import ToolCardComponent from './ToolCard';
// import { ToolCard } from '../lib/types';

// interface ToolsToRentProps {
//   tools: ToolCard[];
// }

// const ToolsToRent = ({ tools }: ToolsToRentProps ) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {tools.map((tool) => (
//         <ToolCardComponent key={tool.id} tool={tool} />
//       ))}
//     </div>
//   );
// };

// export default ToolsToRent;








// import React from 'react';

// type ToolsToRentProps = {
//   tools: {
//     id: number;
//     name: string;
//     description: string;
//   }[];
// };

// const ToolsToRent = ({ tools }: ToolsToRentProps) => {
//   console.log('tools', tools);
//   return (
//     <div>
//       {tools.map((tool) => (
//         <div key={tool.id}>
//           <h2>{tool.name}</h2>
//           <p>{tool.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ToolsToRent;



import React, { useState, useEffect } from 'react';
import ToolToRentCard from './ToolToRentCard';
import { ToolCard as ToolType } from '../lib/types';

const ToolsToRent = ({ tools }: { tools: ToolType[] }) => {
  const [toolsList, setToolsList] = useState<ToolType[]>(tools.filter(tool => tool.active));

  const handleDelete = (toolId: string) => {
    setToolsList(toolsList.filter(tool => tool.id !== toolId));
  };

  return (
    <div className="flex flex-wrap justify-center">
      {toolsList.map((tool) => (
        <ToolToRentCard
          key={tool.id}
          tool={tool}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ToolsToRent;
