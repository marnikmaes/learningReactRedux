import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './UserReducer';
import { useDispatch } from 'react-redux';

function Edit() {
    const { id } = useParams();
    const users = useSelector((state) => state.user);
    const existingUser = users.find(user => user.id === parseInt(id));
    const { step, description } = existingUser || {};
    const [editStep, setEditStep] = useState(step);
    const [editDescription, setEditDescription] = useState(description);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            id: id,
            step: editStep,
            description: editDescription
        }))
        navigate('/')
        
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl text-blue-500 font-semibold mb-4">Edit step</h2>
            <form className="max-w-md mx-auto" onSubmit={handleEdit}>
                <div className="mb-4">
                    <label htmlFor="step" className="block text-sm font-medium text-gray-700">Step:</label>
                    <input 
                        type="text" 
                        id="step" 
                        name="step" 
                        value={editStep} 
                        onChange={(e) => setEditStep(e.target.value)} 
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Enter step" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)} 
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                        rows="4" 
                        placeholder="Enter description" 
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Update</button>
            </form>
        </div>
    );
}

export default Edit;
