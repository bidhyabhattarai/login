import React, { useState } from 'react';

const AddSchool = () => {
  const [schools, setSchools] = useState(['Small Heaven School']);
  const [newSchool, setNewSchool] = useState('');

  const handleAddSchool = () => {
    if (newSchool.trim()) {
      setSchools([...schools, newSchool.trim()]);
      setNewSchool('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Top Section - Title */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 shadow-md">
        <h1 className="text-2xl font-bold">School List</h1>
      </header>

      {/* Middle Section - List of Schools */}
      <main className="flex-grow p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Schools</h2>
          <ul className="list-disc pl-5 space-y-2">
            {schools.map((school, index) => (
              <li key={index} className="text-gray-600">
                {school}
              </li>
            ))}
          </ul>

          {/* Input Field */}
          <div className="mt-6">
            <input
              type="text"
              value={newSchool}
              onChange={(e) => setNewSchool(e.target.value)}
              placeholder="Enter a new school name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </main>

      {/* Bottom Section - Add School Button */}
      <footer className="p-6 text-right">
        <button
          onClick={handleAddSchool}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          Add School
        </button>
      </footer>
    </div>
  );
};

export default AddSchool;
