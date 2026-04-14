// Import React
import React from 'react';

function ProjectList({ items, onDelete }) {
    // Check if there are no projects
    if (items.length === 0) {
        return <p className="text-gray-500 italic text-center text-lg">No projects found.</p>;
    }

    return (
        <div className="flex flex-col items-center gap-6">
            {items.map((project, index) => (
                <React.Fragment key={project.id}>
                    {/* Trailing X icon above the project (to match search divider) */}
                    <span className="text-xl text-black">✕</span>

                    {/* Main Project Card with heavy black border and centered text */}
                    <div className="w-full max-w-xs border-2 border-black p-6 flex flex-col items-center text-center rounded-none animate-in fade-in duration-300">
                        <h3 className="font-bold text-2xl text-black mb-2 leading-tight">
                            {project.name}
                        </h3>

                        <p className="text-black text-lg mb-4">
                            {project.description}
                        </p>

                        {/* Button to delete projects */}
                        <button
                            onClick={() => onDelete(project.id)}
                            className="text-lg border-2 border-black px-4 py-1 bg-white hover:bg-red-50 text-black rounded-none transition-colors"
                        >
                            Delete
                        </button>
                    </div>

                    {/* Trailing X icon below the project */}
                    {index === items.length - 1 && (
                        <span className="text-xl text-black">✕</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

// Make globally available
export default ProjectList