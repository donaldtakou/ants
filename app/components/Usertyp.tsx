import React from "react";

const UserTypeSelector: React.FC = () => {
  return (
    <div className="bg-gray-50 border rounded-md p-2 space-y-1">
      <button className="w-full text-blue-700 font-semibold text-sm py-1 border border-blue-700 rounded">
        Grand public
      </button>
      <div className="text-center text-sm text-gray-700">Professionnels de l'automobile</div>
      <div className="text-center text-sm text-gray-700">Auto-écoles et CSSR</div>
      <div className="text-center text-sm text-gray-700">Agent de mairie</div>
    </div>
  );
};

export default UserTypeSelector;
