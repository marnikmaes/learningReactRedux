import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [step, setStep] = useState('');
    const [description, setDescription] = useState('');
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Calculate the new user ID safely
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

        dispatch(addUser({ id: newId, step, description }));
        navigate('/');
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl text-blue-500 font-semibold mb-4">Create New Step</h2>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="step" className="block text-sm font-medium text-gray-700">Step:</label>
                    <input 
                        type="text" 
                        id="step" 
                        name="step" 
                        value={step} 
                        onChange={(e) => setStep(e.target.value)} 
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
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                        rows="4" 
                        placeholder="Enter description" 
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Create;
