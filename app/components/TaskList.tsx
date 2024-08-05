import React from 'react';

const TaskList = ({ tasks, onDelete }: any) => {
    return (
        <div className='text-center w-1/2 mx-auto'>
            <h2 className='text-lg font-semibold'>Task List</h2>
            <ul className='mt-4'>
                {tasks.map((task: any) => (
                    <li key={task.id} className='flex justify-between items-center mb-2'>
                        <span className='mr-2'>{task.title}</span>
                        <button onClick={() => onDelete(task.id)} className='bg-red-500 text-white py-1 px-3 rounded-md'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;