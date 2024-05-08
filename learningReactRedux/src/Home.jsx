import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Home = () => {
    const users = useSelector((state) => state.user);
    
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl text-blue-500 font-semibold mt-8 mb-4">Crud app using React Redux</h2>
            <Link to='/create'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4">+ Create</button>
            </Link>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr className='border-b text-left bg-gray-100'>
                        <th className="px-4 py-2 w-1/6">ID</th>
                        <th className="px-4 py-2 w-2/6">Name</th>
                        <th className="px-4 py-2 w-2/6">Email</th>
                        <th className="px-4 py-2 w-1/6">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => (
                        <tr key={index} className="border-b text-left">
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.step}</td>
                            <td className="px-4 py-2">{user.description}</td>
                            <td className="px-4 py-2">
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mr-2'>Edit</button>
                                <button className='bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-2 rounded'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
