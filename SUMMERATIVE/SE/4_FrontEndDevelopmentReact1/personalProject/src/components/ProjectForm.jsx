// Import React
import React from 'react';
// Import useState
import { useState } from 'react';

function ProjectForm({ onAdd }) {
    // Declare states of form inputs
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    // Handle form submission
    const submit = (e) => {
        e.preventDefault();
        // Check if name is provided (updated from title)
        if (!formData.name.trim()) return;
        onAdd(formData);
        // Clear form after submission
        setFormData({ name: '', description: '' });
    };

    return (
        <form onSubmit={submit} className="flex flex-col items-center gap-4">
            {/* Title Input Group */}
            <div className="flex items-center gap-2 w-full max-w-sm justify-end">
                <label className="text-lg font-light text-black">Title</label>
                <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    // Added border-2, border-black, and rounded-none for the wireframe look
                    className="w-48 border-2 border-black p-1 rounded-none outline-none focus:bg-gray-50"
                    required
                />
            </div>

            {/* Description Input Group */}
            <div className="flex items-start gap-2 w-full max-w-sm justify-end">
                <label className="text-lg font-light text-black mt-1">Description</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    // Added border-2, border-black, and rounded-none for the wireframe look
                    className="w-48 border-2 border-black p-1 h-16 rounded-none outline-none resize-none focus:bg-gray-50"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                // Styled with border-2 and rounded-none to match the Sketch style
                className="border-2 border-black bg-white hover:bg-gray-100 py-1 px-4 w-max rounded-none text-black transition-colors"
            >
                Add
            </button>
        </form>
    );
}

// Make globally available
export default ProjectForm;