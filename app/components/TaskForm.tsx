import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }: any) => {
    const [title, setTitle] = useState<any>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className='py-10 text-center space-x-4'>
            <input
                className='p-2 rounded-md text-black'
                type="text"
                placeholder="Add new task"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Input width={2} value={title} onChange={e => setTitle(e.target.value)} label='Add New Task' crossOrigin='' />
            <Button type='submit' placeholder='Add' size='md'>Add</Button>
            <button className='bg-purple-700 text-white font-bold p-2 rounded-lg' type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
