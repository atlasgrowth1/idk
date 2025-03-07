
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const PipelineView = () => {
  // Sample data for the pipeline - normally this would come from an API
  const [pipelineData, setPipelineData] = useState({
    leads: [
      { id: 'lead1', name: 'Acme Construction', site: 'acmeconstruction', city: 'Chicago', state: 'IL', stage: 'lead' },
      { id: 'lead2', name: 'Metro Electricians', site: 'metroelectricians', city: 'New York', state: 'NY', stage: 'lead' }
    ],
    inProgress: [
      { id: 'prog1', name: 'City Power Services', site: 'citypowerservices', city: 'Dallas', state: 'TX', stage: 'inProgress' },
      { id: 'prog2', name: 'Reliable Electric', site: 'reliableelectric', city: 'Miami', state: 'FL', stage: 'inProgress' }
    ],
    live: [
      { id: 'live1', name: 'Best Electrician Birmingham', site: 'bestelectricianbirminghamal', city: 'Birmingham', state: 'AL', stage: 'live' },
      { id: 'live2', name: 'Arkansas Electric', site: 'reliableelectricarkansas', city: 'Little Rock', state: 'AR', stage: 'live' }
    ]
  });

  // Function to move items between pipeline stages
  const moveItem = (itemId, fromStage, toStage) => {
    setPipelineData(prevData => {
      const item = prevData[fromStage].find(item => item.id === itemId);
      if (!item) return prevData;

      const updatedItem = { ...item, stage: toStage };
      
      return {
        ...prevData,
        [fromStage]: prevData[fromStage].filter(item => item.id !== itemId),
        [toStage]: [...prevData[toStage], updatedItem]
      };
    });
  };

  // Render a card for each business
  const renderCard = (item) => (
    <div 
      key={item.id} 
      className="bg-white p-4 mb-3 rounded-lg shadow-sm border border-gray-200"
    >
      <div className="font-medium text-lg">{item.name}</div>
      <div className="text-gray-600 text-sm">{item.city}, {item.state}</div>
      <div className="text-gray-500 text-xs mt-1">Site: {item.site}</div>
      <div className="mt-3 flex justify-between">
        {item.stage !== 'leads' && (
          <button 
            onClick={() => moveItem(item.id, item.stage, item.stage === 'inProgress' ? 'leads' : 'inProgress')}
            className="text-xs text-gray-600 hover:text-gray-900"
          >
            ← Move Back
          </button>
        )}
        {item.stage !== 'live' && (
          <button 
            onClick={() => moveItem(item.id, item.stage, item.stage === 'leads' ? 'inProgress' : 'live')}
            className="text-xs text-blue-600 hover:text-blue-800 ml-auto"
          >
            Move Forward →
          </button>
        )}
      </div>
    </div>
  );

  // Get site parameter from URL to preserve it
  const { query } = useRouter();
  const siteParam = query.site ? `?site=${query.site}` : '';
  
  return (
    <div className="pipeline-view">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="pipeline-column">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Leads</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[400px]">
            {pipelineData.leads.map(renderCard)}
            {pipelineData.leads.length === 0 && (
              <div className="text-center text-gray-400 py-8">No leads</div>
            )}
          </div>
        </div>
        
        <div className="pipeline-column">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">In Progress</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[400px]">
            {pipelineData.inProgress.map(renderCard)}
            {pipelineData.inProgress.length === 0 && (
              <div className="text-center text-gray-400 py-8">No items in progress</div>
            )}
          </div>
        </div>
        
        <div className="pipeline-column">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Live</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[400px]">
            {pipelineData.live.map(renderCard)}
            {pipelineData.live.length === 0 && (
              <div className="text-center text-gray-400 py-8">No live sites</div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 text-right">
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
          Add New Business
        </button>
      </div>
    </div>
  );
};

export default PipelineView;
