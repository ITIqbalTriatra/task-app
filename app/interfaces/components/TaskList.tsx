import React from "react";

const TaskList = ({ tasks, onDelete, onDone }: { tasks: any; onDelete: any; onDone: any }) => {
  return (
    <div className="text-center w-full lg:w-1/2 mx-auto">
      <h2 className="text-lg font-semibold">Task List</h2>
      <ul className="mt-4 space-y-4">
        {tasks.map((task: any) => (
          <li key={task.id} className="flex w-full justify-between items-center">
            <div className="flex items-center gap-3">
              <div onClick={() => onDone(task.id)} className={`flex items-center justify-center w-5 h-5 rounded-full border ${task.completed ? "border-green-500" : "border-gray-700"}`}>
                {task.completed ? <span className="text-green-500">✓</span> : <></>}
              </div>
              <span className={`mr-2 ${task.completed ? "line-through" : ""}`}>{task.title}</span>
            </div>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white text-sm py-1 px-3 rounded-md">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
