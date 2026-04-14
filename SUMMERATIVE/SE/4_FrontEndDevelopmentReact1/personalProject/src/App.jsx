// Import useState hook from React and various assets
import React from 'react'
import { useState } from 'react'

// Import images and styles
import './App.css'

// Import components
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

// Define the main App component
function App() {
  // Declare states of projects
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', description: 'Description of the project' },
    { id: 2, name: 'Project 2', description: 'Description of the project' },
    { id: 3, name: 'Project 3', description: 'Description of the project' }
  ]);

  // Declare states of search
  const [searchTerm, setSearchTerm] = useState('');

  // Declare function to add new projects
  const handleAddProject = (newProject) => {
    // Ensures new projects get a unique ID to prevent React key warnings
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Logic to delete projects
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Logic to handle searches - Defined before the return statement
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-xl">

        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-black">Personal Project Showcase App</h1>
        </header>

        <main className="flex flex-col items-center">
          {/* Place form here */}
          <section className="mb-12 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">Add Project</h2>
            <ProjectForm onAdd={handleAddProject} />
          </section>

          {/* Search bar and Project lists */}
          <section className="w-full flex flex-col items-center">
            <div className="w-full max-w-sm mb-4">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Forced inline style to ensure the border appears
                style={{ border: '2px solid black', borderRadius: '0px' }}
                className="w-full p-2 outline-none"
              />
            </div>

            {/* Pass the filtered items and the delete function as props */}
            <ProjectList items={filteredProjects} onDelete={handleDeleteProject} />
          </section>
        </main>
      </div>
    </div>
  );
}

// Make it globally available
export default App